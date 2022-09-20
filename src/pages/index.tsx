import { About } from '../components/About'
import { Activities } from '../components/Activities'
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
    </HomeContainer>
  )
}
