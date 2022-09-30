import styled from 'styled-components'

export const ScheduleBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25.2rem;
    width: 100%;
    transition: all 0.2s;

    img {
        object-fit: cover;
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

    :hover {
        transform: translateY(1%);
    }

    @media (max-width: 720px) {
        max-width: fit-content;
    }
`