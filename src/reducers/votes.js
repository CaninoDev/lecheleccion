import { VOTE_REQUEST, VOTE_SUCCESS, VOTE_FAILURE } from '../constants'
const initialState = {
  errorMessage: null
}

export default function votes (state = initialState, action) {
  switch (action.type) {
    case VOTE_REQUEST:
      return { ...state, loading: true }
    case VOTE_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case VOTE_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}
