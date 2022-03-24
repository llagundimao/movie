import services from '../../infrastructures';

export const UPDATE_PAGE_STATE = 'movie/favorites/UPDATE_APP_STATE';

function getFavoritesFromLocalStorage() {
  let favorites = [];
  const jString = window.localStorage.getItem('favorites');

  if (jString) favorites = JSON.parse(jString)

  return favorites;
}

export function initPage() {
  return async (dispatch) => {
    const favorites = getFavoritesFromLocalStorage();
    const res = await services.api.getMovieGenres();
    
    return dispatch({
      type: UPDATE_PAGE_STATE, payload: { favorites, genres: res.genres, isLoaded: true, isLoading: false }})
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
      type: UPDATE_PAGE_STATE,
      payload: { favorites }
    });
  }
}