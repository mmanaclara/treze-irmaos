import { NextApiRequest, NextApiResponse } from 'next'

export default function Booklist(req: NextApiRequest, res: NextApiResponse) {
     const booklist = [
        {
            id: 1,
            title: 'O Evangelho Segundo o Espiritismo',
            author: 'Allan Kardec',
            price: 'R$ 0',
        },
        {
            id: 2,
            title: 'Paulo e Estevão',
            author: 'Emmanuel | Francisco Cândido Xavier',
            price: 'R$ 45',
        },
     ]

     return res.json(booklist)
}