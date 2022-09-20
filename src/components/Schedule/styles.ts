import styled from 'styled-components'

export const ScheduleContainer = styled.section`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    margin-top: 1.5rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ScheduleBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25.2rem;
    width: 100%;

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
`