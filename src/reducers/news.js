export default function newsReducer (state, action) {
  switch (action.type) {
    case 'LOADING_NEWS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_NEWS':
      return {loading: false, collection: action.payload}
    default:
      return {
        loading: false,
        collection: []
      }
  }
}