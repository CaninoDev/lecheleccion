import {
  USER_REQUEST, USER_FAILURE, USER_SUCCESS, USERSLIST_SUCCESS, USERSLIST_REQUEST, USERSLIST_FAILURE
} from '../constants'

const initialState = {
  accounts: [],
  currentUser: {},
  loading: null
}
export default function users (state = initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true }
    case USER_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case USER_SUCCESS:
      return { ...state, loading: false, currentUser: action.data }
    case USERSLIST_REQUEST:
      return { ...state, loading: true }
    case USERSLIST_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case USERSLIST_SUCCESS:
      return { ...state, loading: false, accounts: action.data }
    default:
      return state
  }
}
