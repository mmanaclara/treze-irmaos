import Image from "next/image";
import aboutImg from '../../../public/about-1.png'
import { AboutContainer, Wrapper, TextContent } from "./styles";

export function About() {
  return (
    <AboutContainer>
        <header>
            <h4>Sobre</h4>
        </header>

        <Wrapper>
            <TextContent>
                <h3>Deus, Cristo e caridade</h3>

                <span>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
                </span>

                <a href="#">Saiba mais</a>
            </TextContent>

            <Image src={aboutImg} style={{ objectFit: 'cover'}} width={558} height={291} alt="" />
        </Wrapper>
    </AboutContainer>
  )
}
