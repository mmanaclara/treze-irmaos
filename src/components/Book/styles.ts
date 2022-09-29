import styled from 'styled-components'

export const BookContainer = styled.a`
display: flex;
    flex-direction: column;
    flex: 1;
    cursor: pointer;

    img {
        max-width: 15.1rem;
        height: 21.7rem;
        max-height: 21.7rem;
        object-fit: contain;
    }

    p {
        font-size: 1.2rem;
        text-transform: uppercase;
        background: ${props => props.theme.blue600};
        color: ${props => props.theme.gray100};
        width: fit-content;
        padding: 2px 5px;
        border-radius: 4px;
        margin-top: 1.5rem; 
    }

    strong {
        font-size: 1.8rem;
        font-weight: 500;
        flex-wrap: wrap;
        color: ${props => props.theme.gray900};
        margin-block: 6px;
        line-height: 2.2rem;
    }

    span {
        font-family: Roboto, sans-serif;
        color: ${props => props.theme.gray300};
        font-size: 1.4rem;
    }
`

export const BookInfo = styled.div`
    margin-top: 2.5rem;

    h5 {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${props => props.theme.gray800};
        margin-bottom: 0.5rem;

        :hover {
            color: ${props => props.theme.blue600};
        }
    }

    span {
        color: ${props => props.theme.gray300};
        font-size: 1.6rem;
    }
`

export const BookDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;

    span {
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export const PriceContainer = styled.div`
    color: ${props => props.theme.gray900};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;

    span {
        font-size: 1.2rem;
        color: ${props => props.theme.gray900};
    }

    strong {
        font-weight: 500;
        font-size: 2rem;
    }
`