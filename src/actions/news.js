import fetch from 'isomorphic-fetch'
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE, FILTERED_NEWS, FILTERING_NEWS } from '../constants'

const requestNews = ({
  type: NEWS_REQUEST
})

const filteringNews = query => ({
  type: FILTERING_NEWS,
  data: query
})

const receivedNews = data => ({
  type: NEWS_SUCCESS,
  data: data
})

const filteredNews = data => ({
  type: FILTERED_NEWS,
  data: data
})

const failureNews = error => ({
  type: NEWS_FAILURE,
  errorMessage: error
})

export const filterNews = query => async (dispatch, getState) => {
  dispatch(filteringNews(query))
  try {
    const response = await fetch('/api/articles/search', {
      method: 'POST',
      body: JSON.stringify({search_terms: query, number_of_articl: 20}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw (await response.json())
    }
    const data = await response.json()
    dispatch(filteredNews(data))
  } catch (error) {
    dispatch(failureNews(error.error))
  }
}
/* For offline development */
// export const fetchNews = () => dispatch => {
//   dispatch({type: NEWS_REQUEST})
//   dispatch({type: NEWS_SUCCESS, payload: data})
// }
export const fetchNews = () => async dispatch => {
  dispatch(requestNews)
  try {
    const response = await fetch('/cable')
    if (!response.ok) {
      throw (await response.json())
    } else {
      const article = await response.json()
      dispatch(receivedNews(article))
    }
  } catch (error) {
    dispatch(failureNews(error.error))
  }
}

export const removeNewsCard = articleID => async (dispatch, getState) => {
  dispatch(requestNews)
  let newState = getState().news.data.filter((article) => article.id !== articleID)
  dispatch(receivedNews(newState))
}
