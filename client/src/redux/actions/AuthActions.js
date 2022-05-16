import axios from 'axios'
import * as actionTypes from '../constants'

export const login = (username, password) => async dispatch => {
  try {
    dispatch({ type: actionTypes.AUTH_REQUEST })
    const { data } = await axios.post(`/api/auth`)
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const logout = () => async dispatch => {
  try {
    dispatch({
      type: actionTypes.AUTH_RESET,
      payload: []
    })
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const refresh = token => async dispatch => {
  try {
    dispatch({ type: actionTypes.AUTH_REQUEST })
    const { data } = await axios.get(`/api/refreshToken`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
     })
     dispatch({
       type: actionTypes.AUTH_SUCCESS,
       payload: data
     })
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const register = user => async dispatch => {
  try {
    dispatch({ type: actionTypes.AUTH_REQUEST })
    const { data } = await axios.post('/api/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      user
    })
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
