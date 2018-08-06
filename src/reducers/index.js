import { combineReducers } from 'redux'
import { reducer as geolocation } from 'react-redux-geolocation'
import newsReducer from './news'

const rootReducer = combineReducers({
  geolocation,
  news: newsReducer
})

export default rootReducer
