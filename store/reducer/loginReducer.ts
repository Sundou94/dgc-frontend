import * as A from 'store/action/loginAction'

type TLoginAction =
  | ReturnType<typeof A.setLogIn>
  | ReturnType<typeof A.setLogOut>

interface ILogin {
  isLogin: boolean;
}

const initialState: ILogin = {
  isLogin: false,
}

const loginReducer = (state: ILogin = initialState, action: TLoginAction) => {
  switch (action.type) {
    case A.SET_LOG_IN:
      return {
        isLogin: true,
      }
    case A.SET_LOG_OUT:
      return {
        isLogin: false,
      }
    default:
      return state
  }
}

export default loginReducer