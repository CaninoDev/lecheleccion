import fetch from 'isomorphic-fetch'

import {
  USER_REQUEST, USER_SUCCESS, USER_FAILURE,
  USERSLIST_REQUEST, USERSLIST_SUCCESS, USERSLIST_FAILURE
} from '../constants'

const requestUser = () => ({
  type: USER_REQUEST
})

const receiveUser = user => ({
  type: USER_SUCCESS,
  payload: user
})

const requestUsers = () => ({
  type: USERSLIST_REQUEST
})

const receiveUsers = list => ({
  type: USERSLIST_SUCCESS,
  payload: list
})

export const fetchUser = name => dispatch => {
  dispatch(requestUser())
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({name: name}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(user => { dispatch(receiveUser(user)) })
    .catch(error => dispatch({ type: USER_FAILURE, error }))
}

export const fetchUsersList = () => async dispatch => {
  dispatch(requestUsers())
  try {
    const response = await fetch(`/api/users`, {
      method: 'GET'
    })
    const userList = await response.json()
    console.dir(userList)
    dispatch(receiveUsers(userList))
  } catch (error) {
    dispatch({ type: USERSLIST_FAILURE, error })
  }
}
