import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

import { AddressContent, FooterContainer, Menu, SocialMedia, Wrapper } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Footer () {
    return (
        <FooterContainer>
            <Wrapper>
                <div>
                    <Image src={logoImg} width={82} height={28} alt="" />
                </div>

                <AddressContent>
                    <strong>© 2022 - Sociedade Espírita Treze Irmãos</strong>
                    <p>Rua Pastor Rodolfo Beuttenmuller, 314 </p>
                    <p>Jardim Cidade Universitária, João Pessoa - PB</p>
                    <p>(83) 9 9382-0257 | (83) 99621-6403</p>
                </AddressContent>

                <Menu>
                    <div>
                        <Link href="#home">
                            <a>Início</a>
                        </Link>
                        <Link href="#about">
                            <a>Sobre</a>
                        </Link>
                        <Link href="#activities">
                            <a>Atividades</a>
                        </Link>
                    </div>

                    <div>
                        <Link href="#schedule">
                            <a>Programação</a>
                        </Link>
                        <Link href="#books">
                            <a>Livraria</a>
                        </Link>
                        <Link href="#contact">
                            <a>Contato</a>
                        </Link>
                    </div>
                </Menu>

                <SocialMedia>
                    <a 
                        href="https://www.instagram.com/cetrezeirmaos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FiInstagram size={24} />
                    </a>
                    <a 
                        href="https://www.facebook.com/Centro-Espirita-TREZE-Irm%C3%A3os-898350110344824"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FiFacebook size={24} />
                    </a>
                    <a 
                        href="https://wa.me/5583993820257" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <ImWhatsapp size={24} />
                    </a>
                </SocialMedia>
            </Wrapper>
        </FooterContainer>
    )
}