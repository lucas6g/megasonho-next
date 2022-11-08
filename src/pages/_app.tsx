import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/shared/styles/global'
import Head from 'next/head'
import { theme } from '@/shared/styles/theme'
import { AuthProvider } from '@/shared/context/AuthContext'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tagManegerArgs = {
      gtmId: 'GTM-NWZ2NT9'
    }
    TagManager.initialize(tagManegerArgs)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>MEGASONHO</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp
