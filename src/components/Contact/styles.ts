import styled from 'styled-components'

export const ContactContainer = styled.section`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1080px) {
      margin-top: 2rem;
    }
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    a {
        cursor: pointer;
        font-weight: 500;
        color: ${props => props.theme.gray700};

        :hover span {
            color: ${props => props.theme.blue600};
            font-weight: 600;
        }
    }

    a:nth-child(4) {
        margin-top: 2rem;
        padding: 1rem 3rem;
        width: fit-content;
        border-radius: 8px;
        background-color: ${props => props.theme.blue600};
        color: ${props => props.theme.gray100};
        text-decoration: none;
        font-weight: 700;

        display: flex;
        align-items: center;
        gap: 6px;

        box-shadow: 0 4px 4px rgba(0,0,0,0.35);
        transition: all 0.1s;

        :hover {
            background-color: ${props => props.theme.blue700};
            transform: translateY(-8%);
        }
    }
`

export const AddressInfo = styled.div`
    span {
        font-weight: 500;
        line-height: 2rem;
        color: ${props => props.theme.gray700};
    }
`

export const StreetInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const SocialMedia = styled.a`
    display: flex;
    gap: 6px;

    span {
        font-weight: 500;
    }
`

export const ImageContainer = styled.div`
    @media (max-width: 1080px) {
      iframe {
        max-width: min-content;
        margin-top: 1rem;
      }
    }
`
