import {
  USERSLIST_SUCCESS, USERSLIST_REQUEST, USERSLIST_FAILURE,
  USER_REQUEST, USER_SUCCESS, USER_FAILURE
} from '../constants'

const initialState = {
  usersList: [],
  loggedInUser: {
    id: null,
    name: null
  }
}
export default function users (state = initialState, action) {
  switch (action.type) {
    case USER_REQUEST || USERSLIST_REQUEST:
      return { ...state, loading: true }
    case USER_FAILURE || USERSLIST_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    case USER_SUCCESS:
      return { ...state, loading: false, loggedInUser: action.payload }
    case USERSLIST_SUCCESS:
      return { ...state, loading: false, usersList: action.payload }
    default:
      return state
  }
}
