import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class ServerSideStyledComponent extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originPage = ctx.renderPage

    try {
      ctx.renderPage = () => originPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props}
        />),
      })

      const initProps = await Document.getInitialProps(ctx)

      const styledComponentProps = {
        ...initProps, styles: (
          <>
            {initProps.styles}
            {
              sheet.getStyleElement()
            }
          </>),
      }

      return styledComponentProps

    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8'></meta>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default ServerSideStyledComponent