import { FaMicrophoneAlt, FaHeart, FaBookOpen } from "react-icons/fa";
import { ActivitiesContainer, Wrapper, BoxContainer, ActivityInfo } from "./styles";

export function Activities() {
    return (
        <ActivitiesContainer>
            <header>
                <h4>Atividades</h4>
            </header>

            <Wrapper>
                <BoxContainer>
                    <header>
                        <h2>Atendimento fraterno</h2>
                    </header>
                    <FaHeart size={65} />
                    
                    <ActivityInfo>
                        <strong>Toda quinta feira</strong>
                        <span>Às 18h30</span>
                    </ActivityInfo>
                </BoxContainer>

                <BoxContainer>
                    <header>
                        <h2>Palestra pública</h2>
                    </header>

                    <FaMicrophoneAlt size={65} />
                    <ActivityInfo>
                        <strong>Toda quinta feira</strong>
                        <span>Às 19h30</span>
                    </ActivityInfo>
                </BoxContainer>

                <BoxContainer>
                    <header>
                        <h2>Grupo de estudos</h2>
                    </header>

                    <FaBookOpen size={70} />
                    <ActivityInfo>
                        <strong>Todo sábado</strong>
                        <span>Às 15h</span>
                    </ActivityInfo>
                </BoxContainer>
            </Wrapper>
        </ActivitiesContainer>
    )
}