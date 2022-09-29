import styled from 'styled-components'

export const AboutPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin-block: 3rem;
    margin-inline: auto;

    margin-top: 1.5rem;
    width: min(118rem, 100%);
    padding-inline: 2.5rem;

    header {
        margin-top: 1.5rem;
    }

    h3 {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        line-height: 2.8rem;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1.5rem;
    color: ${props => props.theme.gray700};
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-block: 1.5rem;

    img {
        opacity: 0.92;

        :hover {
            opacity: 1;
        }
    }
`

export const TextContent = styled.div`
    width: 44%;
`

export const TextContainer = styled.div`
    width: 44%;
    align-self: center;
`

export const TextWithoutImage = styled.div``

export const ImageContainer = styled.div`
    margin-block: 2rem;
    img {
        opacity: 0.85;
        transition: all 0.2s;

        :hover {
            opacity: 1;
        }
    }
`

export const BackToHomeButton = styled.a`
    cursor: pointer;
    padding: 1.4rem 3.4rem;
    width: fit-content;
    align-self: center;

    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${props => props.theme.blue600};
    border-radius: 8px;
    transition: all 0.2s;

    span {
        font-weight: bold;
        color: ${props => props.theme.blue600};
        transition: all 0.2s;
    }

    :hover * {
            color: ${props => props.theme.gray100};
    }

    :hover {
        background-color: ${props => props.theme.blue600};
    }
`