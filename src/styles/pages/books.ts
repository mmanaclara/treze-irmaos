import styled from 'styled-components'

export const BookshopContainer = styled.main`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`
export const BookWithButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
`