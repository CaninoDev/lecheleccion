import { combineReducers } from 'redux'
import news from './news'
import users from './users'
import votes from './votes'
import articlesBias from './articles_bias'
import userBias from './user_bias'

import { default as modals } from './modals'

const rootReducer = combineReducers({
  users,
  news,
  modals,
  votes,
  articlesBias,
  userBias
})

export default rootReducer
