import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { GlobalStyle } from '../design'
import { customTheme } from '../design/theme'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
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

export default App
