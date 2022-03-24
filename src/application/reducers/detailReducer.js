import DetailPageState from "../state/DetailPageState";
import { UPDATE_DETAIL_STATE } from '../actions/detailPageActions';

function movieReducer(state = DetailPageState.EMPTY, action) {
  switch(action.type) {
    case UPDATE_DETAIL_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default movieReducer
