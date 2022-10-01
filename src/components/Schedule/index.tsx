import scheduleImg1 from '../../../public/schedule-1.png'
import scheduleImg2 from '../../../public/schedule-2.png'
import scheduleImg3 from '../../../public/schedule-3.png'
import scheduleImg4 from '../../../public/schedule-4.png'
import { SeminarFlyer } from '../SeminarFlyer'
import { ScheduleContainer, Wrapper } from './styles'

export function Schedule() {
    const seminarData = [
        {
            id: 1,
            image: scheduleImg1,
            tag: "Palestra pública" ,
            title: "O Consolador Prometido" ,
            date: "06/10/2022" ,
            time: "19:30",
        },
        {
            id: 2,
            image: scheduleImg2,
            tag: "Palestra pública" ,
            title: "O que é ser Espírita?" ,
            date: "13/10/2022" ,
            time: "19:30",
        },
        {
            id: 3,
            image: scheduleImg3,
            tag: "Palestra pública" ,
            title: "Ação e Oração" ,
            date: "20/10/2022" ,
            time: "19:30",
        },
        {
            id: 4,
            image: scheduleImg4,
            tag: "Palestra pública" ,
            title: "Piedade Filial" ,
            date: "27/10/2022" ,
            time: "19:30",
        },
    ]
    return (
        <ScheduleContainer id="schedule">
            <header>
                <h4>Programação</h4>
            </header>

            <Wrapper>
                {seminarData.map(data => (
                    <SeminarFlyer 
                        key={data.id} 
                        image={data.image}
                        tag={data.tag} 
                        title={data.title} 
                        date={data.date} 
                        time={data.time}
                    />
                ))}
            </Wrapper>
        </ScheduleContainer>
    )
}