import { useRouter } from "next/router"


export default function Post1() {
  const { query } = useRouter()

    return (
      <div>
        <h1>Post: {JSON.stringify(query)}</h1> 
      </div>
    )
  }