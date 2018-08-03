import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

/*
* Custom logger as demonstrated in:
*  https://redux.js.org/api/applymiddleware
*/
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)
    console.log('state after dispatch', getState())
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const middlewares = [ReduxThunk, logger]

export default function configureStore() {
  return createStore(
    rootReducer, composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
}