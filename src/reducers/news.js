import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from '../constants'
const initialState = {
  collection: [],
  errorMessage: null
}
export default function news (state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, loading: true }
    case NEWS_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case NEWS_SUCCESS:
      return { ...state, loading: false, collection: action.data }
    default:
      return state
  }
}
