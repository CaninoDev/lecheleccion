import { combineReducers } from 'redux'
import { reducer as geolocation } from 'react-redux-geolocation'
import newsReducer from './news'
import userReducer from './users'

const rootReducer = combineReducers({
  geolocation,
  news: newsReducer,
  user: userReducer
})

export default rootReducer
