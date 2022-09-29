import {
  Button,
  DialogDismiss,
  DialogHeading,
  DialogDescription,
  useDialogState,
  
} from "ariakit";

import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

import { 
  BookshopContainer, 
  Wrapper 
} from "../../styles/pages/books";

import bookImg1 from '../../../public/book-1.png'
import bookImg2 from '../../../public/book-2.png'
import bookImg3 from '../../../public/book-3.png'
import bookImg4 from '../../../public/book-4.png'
import { Book } from "../../components/Book";

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
      </BookshopContainer> 
    </>
  )
}
