import { applyMiddleware, compose, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './index'

const isProduction = process.env.NODE_ENV === 'production'

const makeStore = (initialState, options) => {
  const middlewares = []
  const enhancer = isProduction
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, initialState, enhancer)

  return store
}

// @ts-ignore
const wrapper = createWrapper(makeStore, { debug: !isProduction })

export default wrapper