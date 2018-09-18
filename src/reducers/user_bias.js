import { BIAS_USER_REQUEST, BIAS_USER_SUCCESS, BIAS_USER_FAILURE } from '../constants'
const initialState = {
  loading: null,
  errorMessage: null,
  data: {}
}

export default function userBias (state = initialState, action) {
  switch (action.type) {
    case BIAS_USER_REQUEST:
      return { ...state, loading: true }
    case BIAS_USER_SUCCESS:
      return { ...state, loading: false, data: action.data.bias }
    case BIAS_USER_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    default:
      return state
  }
}
