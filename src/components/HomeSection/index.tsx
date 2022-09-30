import { BoxMeeting, HomeContainer, LogoContainer, MeetingContent, MeetingDate, NextMeetings, Welcome, Wrapper } from "./styles"

import Image from "next/image"
import backgroundImg from '../../../public/field-bg.png'
import logoSeti from '../../../public/logo-seti.png'

export function HomeSection() {
  return (
    <HomeContainer id="home" style={{ backgroundImage: `url(${backgroundImg.src})` }}>
      <Wrapper>
        <LogoContainer>
          <Image src={logoSeti} width={125} height={125} alt="" />
        </LogoContainer>

        <Welcome>
          <h2>Boas-vindas ao</h2>
          <strong>Centro Espírita</strong>
          <h1>Treze Irmãos</h1>
          <span>Que bom ter você com a gente!</span>
        </Welcome>

        <NextMeetings>
          <header>
              <h4>Próximas palestras</h4>
          </header>

          <BoxMeeting>
              <MeetingDate>
                  <strong>06</strong>
                  <span>out</span>
              </MeetingDate>

              <MeetingContent>
                  <h3>O consolador Prometido</h3>
                  <span>Edmilson Azevedo</span>
              </MeetingContent>
          </BoxMeeting>

          <BoxMeeting>
              <MeetingDate style={{ background: '#2166A5', color: '#fff' }}>
                  <strong>13</strong>
                  <span>out</span>
              </MeetingDate>

              <MeetingContent>
                  <h3>O que é ser Espírita?</h3>
                  <span>Sinval Quirino</span>
              </MeetingContent>
          </BoxMeeting>
        </NextMeetings>
      </Wrapper>
    </HomeContainer>
  )
}

