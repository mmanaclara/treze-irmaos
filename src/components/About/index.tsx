// import { useKeenSlider } from 'keen-slider/react'

import Image from "next/image";
import aboutImg1 from '../../../public/about-1.png'

import "keen-slider/keen-slider.min.css"
import { AboutContainer, Wrapper, TextContent, SlideContainer, SlideWrapper } from "./styles";
import React, { useState } from 'react';

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

                <a href="#">Saiba mais</a>
            </TextContent>

            <SlideContainer>
                <SlideWrapper>
                    <div>
                        <Image 
                            src={aboutImg1} 
                            style={{ objectFit: 'cover'}} 
                            width={558} 
                            height={291} 
                            alt="" 
                        />
                    </div>
                </SlideWrapper>
            </SlideContainer>
        </Wrapper>

    </AboutContainer>
  )
}

