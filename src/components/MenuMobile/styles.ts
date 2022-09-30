import styled, { css } from 'styled-components'

export const Container = styled.div<{isVisible: boolean}>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;

    display: flex;
    flex-direction: column;
    gap: 6rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: ${props => props.theme.blue600};
    background: linear-gradient(90deg, rgba(20,81,135,0.92) 0%, rgba(33,102,165,0.92) 50%, rgba(39,116,187,0.92) 100%);
    backdrop-filter: blur(3px);

    opacity: 0;
    pointer-events: none;

    transition: 0.5s;

    > svg {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        a {
            font-size: 2.2rem;
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `}
`

export const SocialMediaMenu = styled.div`
    display: flex;
    gap: 2rem;
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
`