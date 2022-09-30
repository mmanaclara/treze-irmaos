import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    margin-inline: auto;
    padding-block: 1.6rem;
    background: ${props => props.theme.blue600};
    color: ${props => props.theme.gray100};

    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

    a {
        color: ${props => props.theme.gray100};
        text-decoration: none;
        font-weight: 600;
        font-size: 1.8rem;
        padding: 0.6rem;
    }

    @media (max-width: 1080px) {
      justify-content: space-between;
      padding-inline: 2.5rem;
    }
`

export const Menu = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 2.4rem;
    }

    a {
        transition: all 0.2s;
        
        :hover {
            border-bottom: 1px solid ${props => props.theme.gray100};
            border-radius: 0;
            transform: matrix(4);
        }
    }

    @media (max-width: 1080px) {
      display: none;
    }
`

export const SocialMediaMenu = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        transition: all 0.2s;

        :hover {
            background: ${props => props.theme.blue400};
            border-radius: 4px;
        }
    }

    @media (max-width: 1080px) {
      display: none;
    }
`