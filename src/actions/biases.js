import fetch from 'isomorphic-fetch'
import { BIAS_USER_REQUEST, BIAS_USER_SUCCESS, BIAS_USER_FAILURE, BIAS_ARTICLES_REQUEST, BIAS_ARTICLES_SUCCESS, BIAS_ARTICLES_FAILURE } from '../constants'

const requestUserBias = () => {
  return ({
    type: BIAS_USER_REQUEST
  })
}

const requestArticlesBias = () => {
  return ({
    type: BIAS_ARTICLES_REQUEST
  })
}

const receivedUserBias = data => {
  return ({
    type: BIAS_USER_SUCCESS,
    data: data
  })
}
const receivedArticlesBias = data => {
  return ({
    type: BIAS_ARTICLES_SUCCESS,
    data: data
  })
}

const errorArticlesBias = error => {
  return ({
    type: BIAS_ARTICLES_FAILURE,
    error: error
  })
}

const errorUserBias = error => {
  return ({
    type: BIAS_USER_FAILURE,
    error: error
  })
}

export const fetchArticlesBias = () => async dispatch => {
  dispatch(requestArticlesBias())
  try {
    const response = await fetch('/api/articles/bias')

    if (!response.ok) {
      throw await response.json()
    }

    const data = await response.json()
    dispatch(receivedArticlesBias(data))
  } catch (error) {
    dispatch(errorArticlesBias(error))
  }
}

export const fetchUserBias = userID => async dispatch => {
  dispatch(requestUserBias())
  try {
    const response = await fetch(`/api/users/${userID}`)

    if (!response.ok) {
      throw await response.json()
    }

    const data = await response.json()
    dispatch(receivedUserBias(data))
  } catch (error) {
    dispatch(errorUserBias(error))
  }
}
