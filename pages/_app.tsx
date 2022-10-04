import type { AppProps } from 'next/app'

import { RootState } from 'store'
import 'styles/globals.css'
import * as S from 'styles/pages/app.style'

import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import wrapper from 'store/configureStore'
import Footer from 'components/layout/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const themeState = useSelector((state: RootState) => state.themeReducer)

  return (
    <>
      <ThemeProvider theme={themeState.theme}>
        <S.Container>
          <Component {...pageProps} />
          <Footer />
        </S.Container>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);