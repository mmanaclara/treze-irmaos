import { Container, SocialMediaMenu } from "./styles";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

interface MenuMobileProps {
    menuIsVisible: boolean;
    onClick: ()=> void;
}

export function MenuMobile({ menuIsVisible, onClick }: MenuMobileProps) {
    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={28} onClick={onClick} />
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={onClick}>Início</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a onClick={onClick}>Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#activities">
                            <a onClick={onClick}>Atividades</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#schedule">
                            <a onClick={onClick}>Programação</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/books">
                            <a onClick={onClick}>Livraria</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact">
                            <a onClick={onClick}>Contato</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a onClick={onClick}>Blog</a>
                        </Link>
                    </li>
                    
                </ul>
            </nav>

            <SocialMediaMenu>
            <a 
                href="https://www.instagram.com/cetrezeirmaos/"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FiInstagram size={30} />
            </a>
            <a 
                href="https://www.facebook.com/Centro-Espirita-TREZE-Irm%C3%A3os-898350110344824"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FiFacebook size={30} />
            </a>
            <a 
                href="https://wa.me/5583993820257"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <ImWhatsapp size={30} />
            </a>
        </SocialMediaMenu>
        </Container>
    )
}