import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: ${props => props.theme.blue600};
    color: ${props => props.theme.gray100};
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;

    margin-top: 1.5rem;
    width: 100%;
    padding-inline: 2.5rem;
    margin-inline: auto;
`

export const Wrapper = styled.div`
    padding-block: 3rem;
    margin-inline: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12rem;
`

export const AddressContent = styled.div`
    strong {
        display: block;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    p {
        line-height: 2.2rem;
    }
`

export const Menu = styled.div`
    display: flex;
    gap: 6rem;

    div {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.gray100};
    }
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 3.2rem;
`