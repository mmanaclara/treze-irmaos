import Image from 'next/image'

import scheduleImg1 from '../../../public/schedule-1.png'
import scheduleImg2 from '../../../public/schedule-2.png'
import scheduleImg3 from '../../../public/schedule-3.png'
import scheduleImg4 from '../../../public/schedule-4.png'
import { ScheduleContainer, Wrapper, ScheduleBox } from './styles'

export function Schedule() {
    return (
        <ScheduleContainer id="schedule">
            <header>
                <h4>Programação</h4>
            </header>

            <Wrapper>
                <ScheduleBox>
                    <Image src={scheduleImg1} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>O consolador Prometido</strong>
                    <span>06/10/2022 às 19h30</span>
                </ScheduleBox>

                <ScheduleBox>
                    <Image src={scheduleImg2} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>O que é ser espírita?</strong>
                    <span>13/10/2022 às 19h30</span>
                </ScheduleBox>

                <ScheduleBox>
                    <Image src={scheduleImg3} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>Ação e oração</strong>
                    <span>20/10/2022 às 19h30</span>
                </ScheduleBox>

                <ScheduleBox>
                    <Image src={scheduleImg4} width={252} height={252} alt="" />
                    <p>Palestra pública</p>
                    <strong>Piedade filial</strong>
                    <span>27/10/2022 às 19h30</span>
                </ScheduleBox>
            </Wrapper>
        </ScheduleContainer>
    )
}