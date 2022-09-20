import { HeaderContainer, Menu, SocialMediaMenu } from './styles'

import Image from 'next/image'
import logoImg from '../../assets/logo.svg'

import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

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
      </SocialMediaMenu>
    </HeaderContainer>
  )
}
