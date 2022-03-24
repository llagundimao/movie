import services from '../../infrastructures';
export const UPDATE_DETAIL_STATE = 'movie/detail/UPDATE_DETAIL_STATE'

function getFavoritesFromLocalStorage() {
  let favorites = [];
  const jString = window.localStorage.getItem('favorites');

  if (jString) favorites = JSON.parse(jString)

  return favorites;
}

export function initPage(movieId) {
  return async (dispatch) => {
    const favorites = getFavoritesFromLocalStorage();
    const data = await services.api.getMovieDetail(movieId)

    return dispatch({ type: UPDATE_DETAIL_STATE, payload: { ...data, favorites }})
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
      type: UPDATE_DETAIL_STATE,
      payload: { favorites }
    });
  }
}