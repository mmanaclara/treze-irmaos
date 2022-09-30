import styled from 'styled-components'

export const BookshopContainer = styled.main`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    margin-top: 1.5rem;

    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 720px) {
        flex-direction: column;
        gap: 3rem;
    }
`
export const BookWithButton = styled.div`
    display: flex;
    flex-direction: column;
`