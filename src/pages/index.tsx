import { About } from '../components/About'
import { Activities } from '../components/Activities'
import { Bookshop } from '../components/Bookshop'
import { Contact } from '../components/Contact'
import { HomeSection } from '../components/HomeSection'
import { Schedule } from '../components/Schedule'

import { HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
        <HomeSection />
        <About />
        <Activities />
        <Schedule /> 
        <Bookshop />
        <Contact />
    </HomeContainer>
  )
}
