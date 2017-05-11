import { combineReducers } from 'redux'
import { REMOVE_API } from './actions'

function apis(state = [], action) {
  switch (action.type) {
    case REMOVE_API:
      return state.filter(id => id !== action.apiId)
    default:
      return state
  }
}

function repositories(state = [], action) {
  return state
}

export default combineReducers({
  apis,
  repositories
})