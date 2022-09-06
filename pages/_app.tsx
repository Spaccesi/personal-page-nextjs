import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

const isProduction = process.env.NEXT_PUBLIC_PROD === "production";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    {isProduction && (
      <>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID}');
            `}
        </Script>
      </>
    )}
    
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
