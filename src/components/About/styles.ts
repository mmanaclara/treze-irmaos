import styled from 'styled-components'

export const AboutContainer = styled.section`
    margin-block: 3rem;
    margin-inline: auto;

    margin-top: 1.5rem;
    max-width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    @media (max-width: 720px) {
      width: 100%;
      font-size: 87.5%;
      flex-direction: column-reverse;
      gap: 1rem;

      img {
        width: 100%;
      }
    }
`

export const TextContent = styled.div`
    display: flex;
    gap: 1.8rem;
    flex-direction: column;
    width: 45%;

    h3 {
       font-size: 2.2rem;
       font-weight: 600;
       color: ${props => props.theme.gray800};
       text-transform: uppercase;
    }

    span {
        font-size: 1.8rem;
        display: block;
        line-height: 2.8rem;
    }

    a {
        padding: 1rem 4.5rem;
        width: fit-content;
        border-radius: 8px;
        box-shadow: 0 4px 4px rgba(0,0,0,0.35);
        background-color: ${props => props.theme.blue600};
        color: ${props => props.theme.gray100};

        text-decoration: none;
        font-weight: bold;
        transition: all 0.1s;

        :hover {
            background-color: ${props => props.theme.blue700};
            transform: translateY(-8%);
        }
    }

    @media (max-width: 720px) {
      width: 100%;
    }
`

export const SlideContainer = styled.div`
    @media (max-width: 720px) {
        max-width: 720px;
        width: 100%;
    }
`

export const SlideWrapper = styled.div`
    img {
        opacity: 0.92;
        max-width: 558px;
        max-height: 291px;

        :hover {
            opacity: 1;
        }
    }
`

