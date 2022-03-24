import services from '../../infrastructures';
import { TabType } from '../Classes/Tabs';

export const LOAD_INIT_APP = 'movie/LOAD_INIT_APP';
export const UPDATE_APP_STATE = 'movie/UPDATE_APP_STATE';
export const FETCH_MORE = 'move/FETCH_MORE';

function getFavoritesFromLocalStorage() {
  let favorites = [];
  const jString = window.localStorage.getItem('favorites');

  if (jString) favorites = JSON.parse(jString)

  return favorites;
}

export function initMovieApp() {
  return async (dispatch) => {
    const favorites = getFavoritesFromLocalStorage();
    const promise = Promise.all([
      services.api.getNowPlaying(),
      services.api.getMovieGenres()
    ]);
    const res = await promise;
    const data = { ...res[0], ...res[1] };

    const appState = {
      data,
      favorites,
      genres: res[1]?.genres,
      isLoading: false
    }

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: appState
    });
  }
}

export function getNowPlaying() {
  return async (dispatch) => {
    const data = await services.api.getNowPlaying()

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: { data }
    });
  }
}

export function getPopular() {
  return async (dispatch) => {
    const data = await services.api.getPopular()

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: { data }
    });
  }
}

export function getTopRated() {
  return async (dispatch) => {
    const data = await services.api.getTopRated()

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: { data }
    });
  }
}

export function getUpcoming() {
  return async (dispatch) => {
    const data = await services.api.getUpcoming()

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: { data }
    });
  }
}

export function handleFavorite(movie) {
  return async (dispatch) => {
    const favorites = getFavoritesFromLocalStorage();
    const index = favorites.findIndex(m => m.id === movie.id);

    if (index === -1) {
      favorites.push(movie);
    }
    else {
      favorites.splice(index, 1);
    }

    window.localStorage.setItem('favorites', JSON.stringify(favorites));

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: { favorites }
    });
  }
}

export function fetchMore({ type, currentItems, page = 1 }) {
  return async (dispatch) => {
    let res = null

    if (type === TabType.POPULAR) {
      res = await services.api.getPopular(page);
    }
    else if (type === TabType.TOP_RATED) {
      res = await services.api.getTopRated(page);
    }
    else if (type === TabType.UPCOMING) {
      res = await services.api.getUpcoming(page);
    }
    else {
      res =await services.api.getNowPlaying(page);
    }

    const data = {
      ...res,
      results: [...currentItems, ...res?.results],
      isLoading: false,
      isLoaded: true
    }

    return dispatch({
      type: UPDATE_APP_STATE,
      payload: { data }
    });
  }
}