import styled from 'styled-components'

export const BlogContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-block: 3rem 2rem;
    margin-inline: auto;
    flex: 1;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 2.2rem;
        color: ${props => props.theme.gray500};
    }

    span {
        font-size: 2rem;
    }

    strong {
        font-size: 1.8rem;
    }
`