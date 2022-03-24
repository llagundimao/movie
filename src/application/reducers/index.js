import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';
import DetailPageReducer from './detailReducer';
import FavoritesPageReducer from './favoritesReducer';

const reducers = combineReducers({
  app: MovieReducer,
  detail: DetailPageReducer,
  favorites: FavoritesPageReducer
});

export default reducers;

