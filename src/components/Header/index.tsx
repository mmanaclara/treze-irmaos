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
    const menuData = [
        {
            name: 'Início',
            path: '/' 
        },
        {
            name: 'Sobre',
            path: '/about' 
        },
        {
            name: 'Atividades',
            path: '/#activities' 
        },
        {
            name: 'Programação',
            path: '/#schedule' 
        },
        {
            name: 'Livraria',
            path: '/books' 
        },
        {
            name: 'Contato',
            path: '/#contact' 
        },
        {
            name: 'Blog',
            path: '/blog' 
        },
    ]

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
            {menuData.map(data => (
                <li key={data.name}>
                    <Link href={data.path}>
                        <a>{data.name}</a>
                    </Link>
                </li>
            ))}
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
