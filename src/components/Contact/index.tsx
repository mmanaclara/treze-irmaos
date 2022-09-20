import Image from 'next/image'

import { FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

import { AddressInfo, ContactContainer, ContactInfo, ImageContainer, SocialMedia, StreetInfo, Wrapper } from "./styles";

import mapImg from '../../../public/map.png'

export function Contact() {
    return (
        <ContactContainer>
            <header>
                <h4>Contato</h4>
            </header>

            <Wrapper>
                <ContactInfo>
                    <AddressInfo>
                        <StreetInfo>
                            <FiMapPin size={24} style={{ color: '#2166A5' }} />
                            <span>Rua Pastor Rodolfo Beuttenmuller, 314</span>
                        </StreetInfo>

                        <span>Jd. Cidade Universitária, João Pessoa/PB</span>
                    </AddressInfo>

                    <SocialMedia 
                        href="https://www.instagram.com/cetrezeirmaos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FiInstagram size={24} style={{ color: '#2166A5' }} />
                        <span>@cetrezeirmaos</span>
                    </SocialMedia>

                    <SocialMedia 
                        href="https://www.facebook.com/Centro-Espirita-TREZE-Irm%C3%A3os-898350110344824"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FiFacebook size={24} style={{ color: '#2166A5' }} />
                        <span>/cetrezeirmaos</span>
                    </SocialMedia>

                    <a 
                        href="https://wa.me/5583993820257" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <ImWhatsapp size={20} style={{ color: '#fff' }} />
                        Fala com a gente!
                    </a>
                </ContactInfo>

                <ImageContainer>
                    <Image src={mapImg} alt="" />
                </ImageContainer>
            </Wrapper>
        </ContactContainer>
    )
}