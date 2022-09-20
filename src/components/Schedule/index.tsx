import Image from 'next/image'

import scheduleImg1 from '../../../public/schedule-1.png'
import scheduleImg2 from '../../../public/schedule-2.png'
import scheduleImg3 from '../../../public/schedule-3.png'
import scheduleImg4 from '../../../public/schedule-4.png'
import { ScheduleContainer, Wrapper, ScheduleBox } from './styles'

export function Schedule() {
    return (
        <ScheduleContainer>
            <header>
                <h4>Programação</h4>
            </header>

            <Wrapper>
                <ScheduleBox>
                    <Image src={scheduleImg1} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>Pelos Caminhos da Evangelização</strong>
                    <span>01/09/2022 às 19h30</span>
                </ScheduleBox>

                <ScheduleBox>
                    <Image src={scheduleImg2} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>Reflorescendo o Espiritismo em mim</strong>
                    <span>01/09/2022 às 19h30</span>
                </ScheduleBox>

                <ScheduleBox>
                    <Image src={scheduleImg3} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>Passe: um Convite para o Diálogo</strong>
                    <span>01/09/2022 às 19h30</span>
                </ScheduleBox>

                <ScheduleBox>
                    <Image src={scheduleImg4} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>Resistência ao Mal</strong>
                    <span>01/09/2022 às 19h30</span>
                </ScheduleBox>
            </Wrapper>
        </ScheduleContainer>
    )
}