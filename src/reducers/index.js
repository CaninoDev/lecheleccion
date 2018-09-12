import { combineReducers } from 'redux'
import news from './news'
import users from './users'
import votes from './votes'
import articles_bias from './articles_bias'
import user_bias from './user_bias'

import { default as modals } from './modals'

const rootReducer = combineReducers({
  users,
  news,
  modals,
  votes,
  articles_bias,
  user_bias
})

export default rootReducer
