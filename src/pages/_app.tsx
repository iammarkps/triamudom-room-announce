import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import * as gtag from '../lib/gtag'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { GlobalStyle } from '../design'
import { customTheme } from '../design/theme'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('สร้างโดย พศวัต สุขใส ต.อ.๘๑')
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <React.StrictMode>
      <Head>
        <title>ประกาศห้องเรียน | โรงเรียนเตรียมอุดมศึกษา</title>
      </Head>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App
