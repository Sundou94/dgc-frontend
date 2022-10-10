import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import themeReducer from './reducer/themeReducer'
import loginReducer from './reducer/loginReducer'

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE :
      return action.payload

    default :
      return combineReducers({
        themeReducer,
        loginReducer
      })(state, action)
  }
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;