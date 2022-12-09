import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute="class" enableSystem={true}>
    {process.env.NEXT_PUBLIC_ENV === "production" && (
      <>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID}');
            `}
        </Script>
      </>
    )}
    <Script>
      {
        "document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px')"
      }
    </Script>
    
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp;
