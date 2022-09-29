import Image from "next/image";
import { ScheduleBox } from './styles'
import scheduleImg1 from '../../../public/schedule-1.png'

interface SeminarFlyerProps {
    image: any;
    tag: string;
    title: string;
    date: string;
    time: string;
}

export function SeminarFlyer({ image, tag, title, date, time }: SeminarFlyerProps) {
    return (
        <ScheduleBox>
            <Image src={image} width={252} height={252} alt="" />
            <p>{tag}</p>
            <strong>{title}</strong>
            <span>{date} às {time}</span>
        </ScheduleBox>
    )
}