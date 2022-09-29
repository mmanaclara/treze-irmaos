import Image from "next/image"
import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi"

import { BookshopContainer, Wrapper } from "./styles"

import bookImg1 from '../../../public/book-1.png'
import bookImg2 from '../../../public/book-2.png'
import bookImg3 from '../../../public/book-3.png'
import bookImg4 from '../../../public/book-4.png'

import { Book } from "../Book"

export function Bookshop() {
    return (
        <BookshopContainer id="books">
            <div>
                <header>
                    <h4>Livraria</h4>
                    <Link href="/books">
                        <a>
                            <span>Ir para a livraria</span> 
                            <BiRightArrowAlt size={22} />
                        </a>
                    </Link>
                </header>

                <Wrapper>
                    <Book 
                        title="Segue em Harmonia" 
                        author="Divaldo Franco" 
                        coverImage={bookImg1} 
                        price="40"
                    />

                    <Book 
                        title="O Evangelho de João" 
                        author="Haroldo Dutra Dias" 
                        coverImage={bookImg2} 
                        price="40"
                    />

                    <Book 
                        title="Paulo e Estevão" 
                        author="Francisco Cândido Xavier" 
                        coverImage={bookImg3} 
                        price="37"
                    />

                    <Book 
                        title="Pão Nosso" 
                        author="Francisco Cândido Xavier" 
                        coverImage={bookImg4} 
                        price="32"
                    />
                </Wrapper>
            </div>
        </BookshopContainer>
    )
}