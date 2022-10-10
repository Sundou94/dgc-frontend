import * as S from './Footer.style'
import { darkTheme } from 'styles/theme'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { setDarkTheme, setWhiteTheme } from 'store/action/themeAction'

import Link from 'next/link'
import Mobile from 'components/media/Mobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoon, faSearch, faSun, faUser } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const themeState = useSelector((state: RootState) => state.themeReducer)
  const loginState = useSelector((state: RootState) => state.loginReducer)
  const dispatch = useDispatch()

  const changeTheme = () => {
    if (themeState.theme === darkTheme) {
      dispatch(setWhiteTheme())
    } else {
      dispatch(setDarkTheme())
    }
  }

  return (
    <S.Container>
      <Mobile>
        <S.BottomMenu>
          <S.BottomMenuItem>
            <FontAwesomeIcon
              icon={themeState.theme === darkTheme ? faSun : faMoon}
              color={themeState.theme.fontColor}
              onClick={changeTheme}
              size='2x' />
          </S.BottomMenuItem>
          <S.BottomMenuItem>
            <Link href='/'>
              <FontAwesomeIcon
                icon={faHome}
                color={themeState.theme.fontColor}
                size='2x' />
            </Link>
          </S.BottomMenuItem>
          <S.BottomMenuItem>
            <FontAwesomeIcon
              icon={faSearch}
              color={themeState.theme.fontColor}
              size='2x' />
          </S.BottomMenuItem>
          <S.BottomMenuItem>
            <Link href={loginState.isLogin ? '/mypage' : '/login'}>
              <FontAwesomeIcon
                icon={faUser}
                color={themeState.theme.fontColor}
                size='2x' />
            </Link>
          </S.BottomMenuItem>
        </S.BottomMenu>
      </Mobile>
    </S.Container>
  )
}

export default Footer