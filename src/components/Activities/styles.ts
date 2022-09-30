import styled from 'styled-components'

export const ActivitiesContainer = styled.section`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

export const BoxContainer = styled.div`
    background-color: ${props => props.theme.gray150};
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        height: 11rem;
        padding-inline: 3rem;
        width: 100%;
        margin-bottom: 2rem;
        background: ${props => props.theme.blue600};
        color: ${props => props.theme.gray100};
        text-align: center;
        border-bottom: skewY(-3deg);
        clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 80%, 0 100%);

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    h2 {
        font-weight: 500;
        font-size: 2.4rem;
        text-transform: uppercase;
        line-height: 2.8rem;
    }

    :hover {
        transform: translateY(-1%);
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.25);
    }

    @media (max-width: 720px) {
        h2 {
            font-size: 2rem;
        }
    }
`

export const ActivityInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2.4rem;
    width: 80%;
    text-transform: uppercase;

    padding-block: 1.5rem;
    border-top: 1px solid ${props => props.theme.gray200};

    strong {
        font-weight: 500;
        font-size: 2.2rem;
    }

    span {
        font-weight: 400;
        font-size: 2rem;
        font-family: Roboto, sans-serif;
    }

    @media (max-width: 720px) {
        strong {
            font-size: 2rem;
        }

        span {
            font-size: 1.8rem;
        }
    }
`
