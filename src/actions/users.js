import fetch from 'isomorphic-fetch'

import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USERSLIST_REQUEST,
  USERSLIST_SUCCESS,
  USERSLIST_FAILURE
} from '../constants'

const requestUser = () => ({
  type: USER_REQUEST
})

const requestUsers = () => ({
  type: USERSLIST_REQUEST
})

const receivedUser = data => ({
  type: USER_SUCCESS,
  data: data
})

const receivedUsers = data => ({
  type: USERSLIST_SUCCESS,
  data: data
})

const errorUser = error => ({
  type: USER_FAILURE,
  error: error
})
const errorUsers = error => ({
  type: USERSLIST_FAILURE,
  error: error
})

export const fetchUser = name => async dispatch => {
  dispatch(requestUser())
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw await response.json()
    }

    const user = await response.json()
    dispatch(receivedUser(user))
  } catch (error) {
    dispatch(errorUser(error))
  }
}

export const fetchUsersList = () => async dispatch => {
  dispatch(requestUsers())
  try {
    const response = await fetch(`/api/users`, {
      method: 'GET'
    })
    if (!response.ok) {
      throw (await response.json())
    }
    const userList = await response.json()
    dispatch(receivedUsers(userList))
  } catch (error) {
    dispatch(errorUsers(error))
  }
}
