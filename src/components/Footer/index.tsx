import Image from 'next/image'
import Link from 'next/link'
import { AddressContent, FooterContainer, Menu, SocialMedia, Wrapper } from "./styles";

import logoImg from '../../assets/logo.svg'
import instagramIcon from '../../assets/instagram.svg'
import facebookIcon from '../../assets/facebook.svg'
import whatsappIcon from '../../assets/whatsapp.svg'

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
                        <Link href="#">
                            <a>Início</a>
                        </Link>
                        <Link href="#">
                            <a>Sobre</a>
                        </Link>
                        <Link href="#">
                            <a>Atividades</a>
                        </Link>
                    </div>

                    <div>
                        <Link href="#">
                            <a>Programação</a>
                        </Link>
                        <Link href="#">
                            <a>Livraria</a>
                        </Link>
                        <Link href="#">
                            <a>Contato</a>
                        </Link>
                    </div>
                </Menu>

                <SocialMedia>
                    <a href="#">
                        <Image src={instagramIcon} alt="" />
                    </a>
                    <a href="#">
                        <Image src={facebookIcon} alt="" />
                    </a>
                    <a href="#">
                        <Image src={whatsappIcon} alt="" />
                    </a>
                </SocialMedia>
            </Wrapper>
        </FooterContainer>
    )
}