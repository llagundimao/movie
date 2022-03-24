import { UPDATE_APP_STATE, } from '../actions'
import ApplicationState from '../state/ApplicationState'

function movieReducer(state = ApplicationState.EMPTY, action) {
  switch(action.type) {
    case UPDATE_APP_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default movieReducer
