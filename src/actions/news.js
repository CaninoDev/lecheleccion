import fetch from 'isomorphic-fetch'
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE, FILTERED_NEWS, FILTERING_NEWS } from '../constants'

const requestNews = ({
  type: NEWS_REQUEST
})

const filteringNews = ({
  type: FILTERING_NEWS
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

export const fetchQueriedNews = query => async dispatch => {
  dispatch(requestNews)
  console.log(`query: ${query}`)
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
      dispatch(receivedNews(collection))
    }
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
    const response = await fetch('/api/articles')
    if (!response.ok) {
      throw (await response.json())
    } else {
      const collection = await response.json()
      dispatch(receivedNews(collection))
    }
  } catch (error) {
    dispatch(failureNews(error.error))
  }
}

export const removeNewsCard = articleID => async (dispatch, getState) => {
  dispatch(filteringNews)
  let newState = getState().filter((article) => article.id !== articleID)
  dispatch(filteredNews(newState))
}

export const filterNewsCard = searchTerm => async (dispatch, getState) => {
  dispatch(filteringNews)
  let newState = getState().news.filter(function (newscard) {
    return newscard.body.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  })
  dispatch(filteredNews(newState))
}
