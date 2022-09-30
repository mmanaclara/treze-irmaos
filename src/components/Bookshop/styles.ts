import styled from 'styled-components'

export const BookshopContainer = styled.section`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;

    header {
        font-size: 2rem;
        border-bottom: 1px solid ${props => props.theme.gray200};
        padding-bottom: 1rem;
        font-weight: 400;

        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: ${props => props.theme.gray700};
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-block: 1px solid transparent;
            transition: all 0.2s;

            :hover {
                border-bottom: 1px solid ${props => props.theme.gray700};
                border-radius: 0;
                transform: matrix(4);
            }
        }

        h4 {
            font-size: 2rem;
            border-bottom: none;
            padding-bottom: 0;
            text-transform: uppercase;
        }

        span {
            margin-left: auto;
            font-size: 1.6rem;
            font-weight: 600;
        }
    }

`

export const Wrapper = styled.div`
    margin-top: 1.5rem;

    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 720px) {
        flex-direction: column;
        max-width: 45.2rem;
    }
`

