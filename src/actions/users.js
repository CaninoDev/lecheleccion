import fetch from 'isomorphic-fetch'
import { 
  USER_REQUEST, USER_SUCCESS, USER_FAILURE 
} from '../constants'

export const requestUser = name => ({
  type: USER_REQUEST,
  name
})

export const receiveUser = data => ({
  type: USER_SUCCESS,
  payload: data,
  loggedIn: true
})

export const fetchUser = name => dispatch => {
  dispatch(requestUser(name))
  return fetch('/api/users', {
    method: 'POST',
    body: name
  })
  .then(response => response.json())
  .then(data => dispatch(receiveUser(data)))
  .catch(error => dispatch({type: USER_FAILURE}))
}
