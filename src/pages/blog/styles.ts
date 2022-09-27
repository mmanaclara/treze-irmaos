import styled from 'styled-components'

export const BlogContainer = styled.main`

    header {
        margin-top: 2.5rem;
    } 

    display: flex;
    flex-direction: column;
    margin-block: 3rem;
    margin-inline: auto;

    margin-top: 1.5rem;
    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const BannerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    a {
        cursor: pointer;
    }
`

export const ImageLeft = styled.a``

export const ImageRight = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    flex-wrap: wrap;

    a {
        display: flex;
        gap: 1.5rem;
        width: 50%;

        :nth-child(n + 3) {
            margin-top: 2rem;
        }
    }
`

export const ContentContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.gray500};

    span {
        text-transform: uppercase;
        background-color: ${props => props.theme.blue600};
        color: ${props => props.theme.gray100};
        font-size: 1.2rem;
        border-radius: 2px;
        padding: 4px 1rem;
        width: fit-content;
    }

    h3 {
        font-size: 2rem;
        margin-block: 1rem;
    }

    time {
        margin-block: 1rem 1.5rem;
        display: block;
    }

    strong {
        font-weight: 900;
        color: ${props => props.theme.blue600};
    }
`