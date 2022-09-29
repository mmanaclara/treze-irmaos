import {
  Button,
  Dialog,
  DialogDismiss,
  DialogHeading,
  DialogDescription,
  useDialogState,
} from "ariakit";

import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

import { BookBox, BookDetail, BookInfo, BookshopContainer, DialogContainer, PriceContainer, Wrapper } from "../../styles/pages/books";

import bookImg1 from '../../../public/book-1.png'
import bookImg2 from '../../../public/book-2.png'
import bookImg3 from '../../../public/book-3.png'
import bookImg4 from '../../../public/book-4.png'
import { FaShoppingCart } from "react-icons/fa";

export default function Bookshop() {
  const dialog = useDialogState();

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
              <Button onClick={dialog.toggle}>
                <FaShoppingCart />
                Comprar
              </Button>
              <DialogContainer state={dialog}>
                <DialogHeading>Olá! 👋</DialogHeading>
                <DialogDismiss />
                <DialogDescription>
                  Você pode comprar este livro entrando em contato com a gente pelo WhatsApp. A retirada é na nossa casa espírita, na rua Pastor Rodolfo Beuttenmullher, 314 - Jardim Cidade Universitária, João Pessoa. Muita paz! 🙏
                </DialogDescription>
              </DialogContainer>
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
      </BookshopContainer> 
    </>
  )
}
