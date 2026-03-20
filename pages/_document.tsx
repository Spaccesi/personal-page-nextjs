import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import type { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  const locale = props.__NEXT_DATA__.locale || 'en'

  return (
    <Html lang={locale}>
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
