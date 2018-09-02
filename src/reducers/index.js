import { combineReducers } from 'redux'
import { reducer as geolocation } from 'react-redux-geolocation'
import news from './news'
import users from './users'
import { default as modals } from './modals'

const rootReducer = combineReducers({
  geolocation,
  users,
  news,
  modals
})

export default rootReducer
