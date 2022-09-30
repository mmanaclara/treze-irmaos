import { NextSeo } from "next-seo";
import { Book } from "../../components/Book";

import { 
  BookshopContainer, 
  BookWithButton, 
  Wrapper 
} from "../../styles/pages/books";

import bookImg1 from '../../../public/book-1.jpg'
import bookImg2 from '../../../public/book-2.jpg'
import bookImg3 from '../../../public/book-3.jpg'
import bookImg4 from '../../../public/book-4.jpg'
import bookImg5 from '../../../public/book-5.jpg'
import bookImg6 from '../../../public/book-6.jpg'
import bookImg7 from '../../../public/book-7.jpg'
import bookImg8 from '../../../public/book-8.png'
import bookImg9 from '../../../public/book-9.jpg'
import bookImg10 from '../../../public/book-10.jpg'
import bookImg11 from '../../../public/book-11.png'
import bookImg12 from '../../../public/book-12.jpg'
import bookImg13 from '../../../public/book-13.jpg'
import bookImg14 from '../../../public/book-14.jpg'
import bookImg15 from '../../../public/book-15.jpg'

import { BuyButton } from "../../components/BuyButton";

export default function Bookshop() {
  return (
    <>
        <NextSeo
          title="Livraria | Centro Espírita Treze Irmãos"
          description="Livraria da Sociedade Espírita Treze Irmãos - Espiritismo."
        />

        <BookshopContainer>
          <header>
            <h4>Literatura Espírita</h4>
          </header>

          <Wrapper>
            <BookWithButton>
              <Book 
                title="O Evangelho Segundo o Espiritismo" 
                author="Allan Kardec" 
                coverImage={bookImg1} 
                price="0"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Mariana" 
                  author="Edmilson Azevedo Lima" 
                  coverImage={bookImg2} 
                  price="18"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Evolução em dois Mundos" 
                  author="Francisco Cândido Xavier" 
                  coverImage={bookImg3} 
                  price="42"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="A Obsessão" 
                  author="Allan Kardec" 
                  coverImage={bookImg4} 
                  price="12"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Entrega-te a Deus" 
                  author="Tribuna Espírita" 
                  coverImage={bookImg5} 
                  price="15"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Somos Todos Inocentes" 
                  author="Zíbia Gasparetto" 
                  coverImage={bookImg6} 
                  price="28"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Um amor de verdade" 
                  author="Zíbia Gasparetto" 
                  coverImage={bookImg7} 
                  price="25"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Ela Só Queria Casar" 
                  author="Marcelo Cezar" 
                  coverImage={bookImg8} 
                  price="22"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Com o Amor Não se Brinca" 
                  author="Mônica de Castro" 
                  coverImage={bookImg9} 
                  price="15"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Evolução em dois mundos" 
                  author="Francisco Cândido Xavier" 
                  coverImage={bookImg10} 
                  price="40"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Invisível Cativeiro" 
                  author="Roberto de Carvalho" 
                  coverImage={bookImg11} 
                  price="34"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Se abrindo pra vida" 
                  author="Zíbia Gasparetto" 
                  coverImage={bookImg12} 
                  price="18"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="Não Olhe Para Trás" 
                  author="Elisa Masselli" 
                  coverImage={bookImg13} 
                  price="25"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="A Gênese" 
                  author="Allan Kardec" 
                  coverImage={bookImg14} 
                  price="19"
              />
              <BuyButton />
            </BookWithButton>

            <BookWithButton>
              <Book 
                  title="O Evangelho Segundo o Espiritismo" 
                  author="Allan Kardec" 
                  coverImage={bookImg15} 
                  price="18"
              />
              <BuyButton />
            </BookWithButton>
          </Wrapper>
      </BookshopContainer> 
    </>
  )
}
