import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from 'reducers'

var middlewares = []

export default (initialState) => {
  middlewares.push(thunk)
  middlewares.push(logger)
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
