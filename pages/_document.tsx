import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script id='screen-size-mobile' strategy='beforeInteractive'>
          {
            "document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px')"
          }
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
