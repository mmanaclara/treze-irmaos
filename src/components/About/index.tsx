import Image from "next/image";
import aboutImg1 from '../../../public/about-1.png'

import { AboutContainer, Wrapper, TextContent, SlideContainer, SlideWrapper } from "./styles";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export function About() {
  return (
    <AboutContainer id="about">
        <header>
            <h4>Sobre</h4>
        </header>

        <Wrapper>
            <TextContent>
                <h3>Deus, Cristo e caridade</h3>

                <span>
                    A Sociedade Espírita Treze Irmãos foi idealizada pelo casal José da Penha Lima e Alzira de Azevedo Lima. Já nos meados dos anos 60, funcionava na informalidade nos fundos do quintal de sua residência. Diante da necessidade de levar estes trabalhos do bem a outras pessoas, foi que surgiu ideia de se regularizar uma instituição.
                </span>

                <Link href="/about">    
                    <a>Saiba mais</a>
                </Link>
            </TextContent>

            <SlideContainer>
                <SlideWrapper>
                        <Image 
                            src={aboutImg1} 
                            style={{ objectFit: 'cover'}} 
                            width={720} 
                            height={375} 
                            alt="" 
                        />
                </SlideWrapper>
            </SlideContainer>
        </Wrapper>

    </AboutContainer>
  )
}

