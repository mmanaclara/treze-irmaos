import { NextSeo } from 'next-seo';

import { About } from '../components/About'
import { Activities } from '../components/Activities'
import { Bookshop } from '../components/Bookshop'
import { Contact } from '../components/Contact'
import { HomeSection } from '../components/HomeSection'
import { Schedule } from '../components/Schedule'

import { HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Início | Centro Espírita Treze Irmãos"
        description="A Sociedade Espírita Treze Irmãos está localizada no bairro Jardim Cidade Universitária, em João Pessoa, Paraíba. Seguindo a codificação de Allan Kardec, o centro desenvolve práticas para divulgação do Espiritismo. "
      />

      <HomeContainer>
          <HomeSection />
          <About />
          <Activities />
          <Schedule /> 
          <Bookshop />
          <Contact />
      </HomeContainer>
    </>
  )
}
