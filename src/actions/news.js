import fetch from 'isomorphic-fetch'
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from '../constants'

export const fetchQueriedNews = query => async (dispatch, getState) => {
  dispatch({type: NEWS_REQUEST})
  console.log(query)
  try {
    const response = await fetch('/api/articles/search', {
      method: 'POST',
      body: JSON.stringify({search_term: query}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw (await response.json())
    } else {
      const collection = await response.json()
      dispatch({
        type: NEWS_SUCCESS,
        data: collection
      })
    }
  } catch (error) {
    dispatch({ type: NEWS_FAILURE, error })
  }
}
/* For offline development */
// export const fetchNews = () => dispatch => {
//   dispatch({type: NEWS_REQUEST})
//   dispatch({type: NEWS_SUCCESS, payload: data})
// }
export const fetchNews = () => async dispatch => {
  dispatch({type: NEWS_REQUEST})
  try {
    const response = await fetch('/api/articles')
    if (!response.ok) {
      throw (await response.json())
    } else {
      const collection = await response.json()
      dispatch({
        type: NEWS_SUCCESS,
        data: collection
      })
    }
  } catch (error) {
    dispatch({
      type: NEWS_FAILURE,
      error: error
    })
  }
}
