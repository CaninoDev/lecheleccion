import fetch from 'isomorphic-fetch'
export function fetchNews () {
  return (dispatch) => {
    dispatch({type: 'LOADING_NEWS'})
    return fetch('/api/articles/fetchNews')
      .then(response => response.json())
      .then(collection => {
        console.log(collection)
        dispatch({
        type: 'FETCH_NEWS',
        payload: collection
      })})
  }
}