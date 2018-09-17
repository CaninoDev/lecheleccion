import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE, FILTERING_NEWS, FILTERED_NEWS } from '../constants'
const initialState = {
  loading: null,
  errorMessage: null,
  data: []

}
export default function news (state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST || FILTERING_NEWS:
      return { ...state, loading: true }
    case NEWS_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case NEWS_SUCCESS || FILTERED_NEWS:
      return { ...state, loading: false, data: action.data }
    default:
      return state
  }
}
