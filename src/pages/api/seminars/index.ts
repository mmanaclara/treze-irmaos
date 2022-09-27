import { NextApiRequest, NextApiResponse } from 'next'

export default function Seminars(req: NextApiRequest, res: NextApiResponse) {
    const seminars = [
        {
            id: 1,
            title: 'Conhece-te a ti mesmo',
            speaker: 'Haroldo Dutra Dias'
        },
        {
            id: 2,
            title: 'Vazio Existencial: o Desafio do Século',
            speaker: 'Divaldo Pereira Franco'
        },
    ]

    return res.json(seminars)
}