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