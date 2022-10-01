import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import { defaultTheme } from '../styles/themes/default'

import { useState } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <Container>
        <ThemeProvider theme={defaultTheme}>
          <Header onClick={()=> setMenuIsVisible(!menuIsVisible)} menuIsVisible={menuIsVisible} />
          
          <Component {...pageProps} />

          <Footer />
          <GlobalStyle />
        </ThemeProvider>
      </Container>
    </>
  )
}

export default MyApp
