import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE, FILTERING_NEWS, FILTERED_NEWS, TOGGLE_RESET } from '../constants'
const initialState = {
  loading: null,
  errorMessage: null,
  data: [],
  selectData: [],
  query: [],
  reset: false
}
export default function news (state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, loading: true }
    case FILTERING_NEWS:
      return { ...state, loading: true, query: action.data }
    case NEWS_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case NEWS_SUCCESS:
      return { ...state, loading: false, data: action.data }
    case FILTERED_NEWS:
      return { ...state, loading: false, selectData: action.data }
    case TOGGLE_RESET:
      return { ...state, reset: !state.news.reset }
    default:
      return state
  }
}
