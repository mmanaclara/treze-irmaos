import { useRouter } from "next/router"
import { NextSeo } from 'next-seo';


export default function Book1() {
  const { query } = useRouter()

    return (
      <>
      <NextSeo
          title={JSON.stringify(query)}
          description="Sobre a Sociedade Espírita Treze Irmãos"
        />

      <div>
        <h1>Livro: {JSON.stringify(query)}</h1> 
        <h1>Livro:</h1> 
      </div>
      </>
    )
  }