import { HeaderContainer, Menu, SocialMediaMenu } from './styles'

import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import instagramIcon from '../../assets/instagram.svg'
import facebookIcon from '../../assets/facebook.svg'
import whatsappIcon from '../../assets/whatsapp.svg'

export function Header() {
  return (
    <HeaderContainer>
        <a href="#">
            <Image src={logoImg} alt="" />
        </a>

      <Menu>
        <ul>
            <li>
                <a href="#">Início</a>
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Atividades</a>
            </li>
            <li>
                <a href="#">Programação</a>
            </li>
            <li>
                <a href="#">Livraria</a>
            </li>
            <li>
                <a href="#">Contato</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            
        </ul>
      </Menu>

      <SocialMediaMenu>
        <a href="#">
            <Image src={instagramIcon} alt="" />
        </a>
        <a href="#">
            <Image src={facebookIcon} alt="" />
        </a>
        <a href="#">
            <Image src={whatsappIcon} alt="" />
        </a>
      </SocialMediaMenu>
    </HeaderContainer>
  )
}
