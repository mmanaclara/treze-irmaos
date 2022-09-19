import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { About } from '../components/About'
import { Activities } from '../components/Activities'

import { Header } from '../components/Header'
import { Home } from '../components/Home'

import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import { defaultTheme } from '../styles/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Home />
        <About />
        <Activities />
        
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Container>
  )
}

export default MyApp
