import Image from "next/image"
import Link from 'next/link'
import { BiRightArrowAlt } from "react-icons/bi"

import { BookBox, BookDetail, BookInfo, BookshopContainer, PriceContainer, Wrapper } from "./styles"

import bookImg1 from '../../../public/book-1.png'
import bookImg2 from '../../../public/book-2.png'
import bookImg3 from '../../../public/book-3.png'
import bookImg4 from '../../../public/book-4.png'

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
                    <Link href="#">
                        <BookBox>
                            <Image src={bookImg1} width={151} height={217} alt="" />
                            <BookInfo>
                                <h5>Segue em harmonia</h5>
                                <span>Divaldo Franco</span>
                            </BookInfo>

                            <BookDetail>
                                <span>Capa comum</span>
                                <PriceContainer>
                                    <span>R$</span>
                                    <strong>40</strong>
                                    <span>00</span>
                                </PriceContainer>
                            </BookDetail>
                        </BookBox>
                    </Link>

                    <Link href="#">
                        <BookBox>
                            <Image src={bookImg2} width={151} height={217} alt="" />
                            <BookInfo>
                                <h5>O Evangelho de João</h5>
                                <span>Haroldo Dutra Dias</span>
                            </BookInfo>

                            <BookDetail>
                                <span>Capa comum</span>
                                <PriceContainer>
                                    <span>R$</span>
                                    <strong>40</strong>
                                    <span>00</span>
                                </PriceContainer>
                            </BookDetail>
                        </BookBox>
                    </Link>

                    <Link href="#">
                        <BookBox>
                            <Image src={bookImg3} width={151} height={217} alt="" />
                            <BookInfo>
                                <h5>Paulo e Estevão</h5>
                                <span>Francisco Cândido Xavier</span>
                            </BookInfo>

                            <BookDetail>
                                <span>Capa comum</span>
                                <PriceContainer>
                                    <span>R$</span>
                                    <strong>40</strong>
                                    <span>00</span>
                                </PriceContainer>
                            </BookDetail>
                        </BookBox>
                    </Link>

                    <Link href="#">
                        <BookBox>
                            <Image src={bookImg4} width={151} height={217} alt="" />
                            <BookInfo>
                                <h5>Pão Nosso</h5>
                                <span>Francisco Cândido Xavier</span>
                            </BookInfo>

                            <BookDetail>
                                <span>Capa comum</span>
                                <PriceContainer>
                                    <span>R$</span>
                                    <strong>40</strong>
                                    <span>00</span>
                                </PriceContainer>
                            </BookDetail>
                        </BookBox>
                    </Link>
                </Wrapper>
            </div>
        </BookshopContainer>
    )
}