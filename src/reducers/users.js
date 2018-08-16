import { 
  USERSLIST_SUCCESS, USERSLIST_REQUEST, 
  USER_REQUEST, USER_SUCCESS
} from 'constants'

export default function userReducer (state = { user: '' }, action) {
  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, {loading: true})
    case USER_SUCCESS:
      return {...state, loading: false, user: action.payload}
      default: 
    return state
  }
}

export function usersReducer (state = { list: [] }, action) {
  switch(action.type) {
    case USERSLIST_REQUEST:
      return Object.assign({}, state, {loading: true})
    case USERSLIST_SUCCESS:
      return {...state, loading: false, list: [...action.payload]}
      default: 
    return state
  }
}