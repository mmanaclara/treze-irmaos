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

    a {
        transform: translateY(-8%);
    }

    @media (max-width: 1080px) {
      flex-direction: column;
      gap: 2rem;
    }
`

export const AddressContent = styled.div`
    strong {
        display: block;
        font-weight: 400;
        margin-bottom: 1.5rem;
    }

    p {
        line-height: 2.2rem;
        font-weight: 400;
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
        line-height: 2.5rem;
        color: ${props => props.theme.gray100};
        font-weight: 400;
        transition: all 0.2s;
        border: 1px solid transparent;
        
        :hover {
            border-bottom: 1px solid ${props => props.theme.gray100};
            border-radius: 0;
            transform: matrix(4);
            transform: translateY(-8%);

        }
    }
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 2.4rem;

    a {
        color: ${props => props.theme.gray100};
        padding: 0.6rem;

        :hover {
            background: ${props => props.theme.blue400};
            border-radius: 4px;
        }
    }
`