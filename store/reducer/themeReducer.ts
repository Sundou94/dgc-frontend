import * as A from '../action/themeAction'
import { darkTheme, whiteTheme } from '../../styles/theme'

type TThemeAction =
  | ReturnType<typeof A.setDarkTheme>
  | ReturnType<typeof A.setWhiteTheme>

interface ITheme {
  theme: object;
}

const initialState:ITheme = {
  theme: whiteTheme,
}

const themeReducer = (state:ITheme = initialState, action: TThemeAction) => {
  switch (action.type) {
    case A.SET_DARK_THEME:
      return {
        theme: darkTheme,
      }
    case A.SET_WHITE_THEME:
      return {
        theme: whiteTheme,
      }
    default:
      return state
  }
}

export default themeReducer