import { BIAS_ARTICLES_REQUEST, BIAS_ARTICLES_SUCCESS, BIAS_ARTICLES_FAILURE } from '../constants'
const initialState = {
  loading: null,
  errorMessage: null,
  data: {}
}

export default function articlesBias (state = initialState, action) {
  switch (action.type) {
    case BIAS_ARTICLES_REQUEST:
      return { ...state, loading: true }
    case BIAS_ARTICLES_SUCCESS:
      return { ...state, loading: false, data: action.data }
    case BIAS_ARTICLES_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    default:
      return state
  }
}
