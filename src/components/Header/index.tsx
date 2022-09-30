import Link from 'next/link'
import { HeaderContainer, Menu, SocialMediaMenu } from './styles'

import Image from 'next/image'
import logoImg from '../../../public/logo.svg'

import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { HiMenu } from "react-icons/hi";
import { ImWhatsapp } from 'react-icons/im'
import { MenuMobile } from '../MenuMobile'

interface VisibilityProps {
    onClick: ()=> void;
    menuIsVisible: boolean;
}

export function Header({ onClick, menuIsVisible }: VisibilityProps) {
  return (
    <HeaderContainer>
        <Link href="/">
            <a>
                <Image src={logoImg} alt="" />
            </a>
        </Link>

        <MenuMobile 
           onClick={onClick}
           menuIsVisible={menuIsVisible} 
        />

        <Menu>
            <ul>
                <li>
                    <Link href="/">
                        <a>Início</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#activities">
                        <a>Atividades</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#schedule">
                        <a>Programação</a>
                    </Link>
                </li>
                <li>
                    <Link href="/books">
                        <a>Livraria</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#contact">
                        <a>Contato</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
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

        <HiMenu size={28} onClick={onClick} />
    </HeaderContainer>
  )
}
