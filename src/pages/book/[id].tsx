import { useRouter } from "next/router"


export default function Book1() {
  const { query } = useRouter()

    return (
      <div>
        <h1>Livro: {JSON.stringify(query)}</h1> 
      </div>
    )
  }