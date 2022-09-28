import Image from 'next/image'

import { FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

import { AddressInfo, ContactContainer, ContactInfo, ImageContainer, SocialMedia, StreetInfo, Wrapper } from "./styles";

export function Contact() {
    return (
        <ContactContainer id="contact">
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
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7356432450924!2d-34.84305750000001!3d-7.1565322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc28c87999dd1%3A0xd8f93149411868b3!2sRua%20Pastor%20Rodolfo%20Beuttenmuller%2C%20314%20-%20Jardim%20Cidade%20Universit%C3%A1ria%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058052-140!5e0!3m2!1spt-BR!2sbr!4v1664314125373!5m2!1spt-BR!2sbr" 
                        width="640" 
                        height="287" 
                        style={{ border:0 }}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </ImageContainer>
            </Wrapper>
        </ContactContainer>
    )
}