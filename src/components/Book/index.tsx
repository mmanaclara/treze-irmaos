import Image from "next/image";
import Link from "next/link";
import { BookContainer, BookDetail, BookInfo, PriceContainer } from "./styles";

interface BookProps {
    title: string;
    author: string;
    coverImage: any;
    price: string;
}

export function Book({ title, author, coverImage, price }: BookProps) {
    return (
        <Link href="/books">
            <BookContainer>
                <Image src={coverImage} width={151} height={217} alt="" />
                <BookInfo>
                    <h5>{title}</h5>
                    <span>{author}</span>
                </BookInfo>

                <BookDetail>
                    <span>Capa comum</span>
                    <PriceContainer>
                        <span>R$</span>
                        <strong>{price}</strong>
                        <span>00</span>
                    </PriceContainer>
                </BookDetail>
            </BookContainer>
        </Link>
    )
}