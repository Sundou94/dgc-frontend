import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import themeReducer from './reducer/themeReducer'

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE :
      return action.payload

    default :
      return combineReducers({
        themeReducer,
      })(state, action)
  }
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;