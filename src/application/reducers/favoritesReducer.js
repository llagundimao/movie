import FavoritesPageState from '../state/FavoritesPageState';
import { UPDATE_PAGE_STATE } from '../actions/favoritesAction';

function favoritesReducer(state = FavoritesPageState.EMPTY, action) {
  switch(action.type) {
    case UPDATE_PAGE_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default favoritesReducer
