import Image from "next/image"
import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi"

import { BookshopContainer, Wrapper } from "./styles"

import bookImg1 from '../../../public/book-1.jpg'
import bookImg2 from '../../../public/book-2.jpg'
import bookImg3 from '../../../public/book-10.jpg'
import bookImg4 from '../../../public/book-14.jpg'

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
                        title="O Evangelho Segundo o Espiritismo" 
                        author="Allan Kardec" 
                        coverImage={bookImg1} 
                        price="0"
                    />

                    <Book 
                        title="Mariana" 
                        author="Edmilson Azevedo Lima" 
                        coverImage={bookImg2} 
                        price="18"
                    />

                    <Book 
                        title="Evolução em dois Mundos" 
                        author="Francisco Cândido Xavier" 
                        coverImage={bookImg3} 
                        price="42"
                    />

                    <Book 
                        title="A Gênese" 
                        author="Allan Kardec" 
                        coverImage={bookImg4} 
                        price="19"
                    />
                </Wrapper>
            </div>
        </BookshopContainer>
    )
}