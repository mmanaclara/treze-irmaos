import { BoxMeeting, HomeContainer, MeetingContent, MeetingDate, NextMeetings, Welcome } from "./styles"

import Image from "next/image"
import backgroundImg from '../../assets/field-bg.png'
import logoSeti from '../../assets/logo-seti.png'

export function Home() {
  return (
    <HomeContainer style={{ backgroundImage: `url(${backgroundImg.src})` }}>
      <Image src={logoSeti} width="125" height="125" alt="" />

      <Welcome>
        <h2>Boas-vindas ao</h2>
        <strong>Centro Espírita</strong>
        <h1>Treze Irmãos</h1>
        <span>Que bom ter você com a gente!</span>
      </Welcome>

      <NextMeetings>
        <header>Próximas palestras</header>

        <BoxMeeting>
            <MeetingDate>
                <strong>22</strong>
                <span>set</span>
            </MeetingDate>

            <MeetingContent>
                <h3>A Parábola do Festim das Bodas</h3>
                <span>Tonny Souza</span>
            </MeetingContent>
        </BoxMeeting>

        <BoxMeeting>
            <MeetingDate style={{ background: '#2166A5', color: '#fff' }}>
                <strong>29</strong>
                <span>set</span>
            </MeetingDate>

            <MeetingContent>
                <h3>Conhecimento de si mesmo</h3>
                <span>Davi Reis</span>
            </MeetingContent>
        </BoxMeeting>
      </NextMeetings>
    </HomeContainer>
  )
}

