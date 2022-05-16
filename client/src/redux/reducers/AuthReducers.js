import * as actionTypes from '../constants'

const AUTH_INITIAL_STATE = {
  user: []
}

export const authReducer = (state = AUTH_INITIAL_STATE, action) => {
  switch(action.types) {
    case actionTypes.AUTH_REQUEST:
      return {
        loading: true,
        user: []
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        loading: false,
        user: action.payload
      }
    case actionTypes.AUTH_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case actionTypes.AUTH_RESET:
      return {
        user: {}
      }
    default:
      return state
  }
}
