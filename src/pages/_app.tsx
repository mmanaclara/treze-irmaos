import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../services/prismicio'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import { defaultTheme } from '../styles/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Container>
          <ThemeProvider theme={defaultTheme}>
            <Header />
            
            <Component {...pageProps} />

            <Footer />
            <GlobalStyle />
          </ThemeProvider>
        </Container>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
