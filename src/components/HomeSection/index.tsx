import { BoxMeeting, HomeContainer, MeetingContent, MeetingDate, NextMeetings, Welcome } from "./styles"

import Image from "next/image"
import backgroundImg from '../../assets/field-bg.png'
import logoSeti from '../../assets/logo-seti.png'

export function HomeSection() {
  return (
    <HomeContainer id="home" style={{ backgroundImage: `url(${backgroundImg.src})` }}>
      <Image src={logoSeti} width="125" height="125" alt="" />

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
    </HomeContainer>
  )
}

