import fetch from 'isomorphic-fetch'
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE, REMOVING_NEWSCARD, REMOVED_NEWSCARD } from '../constants'

export const fetchNews = ({query = null, number = 50}) => async (dispatch, getState) => {
  dispatch({type: NEWS_REQUEST})
  let postingObject = {}
  if (query) {
    postingObject['search_term'] = query
  }
  if (number) {
    postingObject['number'] = number
  }

  try {
    const response = await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify({articles: postingObject}),
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
    dispatch({
      type: NEWS_FAILURE,
      error: error
    })
  }
}
/* For offline development */
// export const fetchNews = () => dispatch => {
//   dispatch({type: NEWS_REQUEST})
//   dispatch({type: NEWS_SUCCESS, payload: data})
// }
export const removeCardFromGrid = (articleID) => (dispatch, getState) => {
  dispatch({type: REMOVING_NEWSCARD})
  const { news } = getState()
  const newState = news.collection.filter(article => article.id !== articleID)
  dispatch({
    type: REMOVED_NEWSCARD,
    data: newState
  })
}
