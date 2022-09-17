import styled from 'styled-components'

export const HomeContainer = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    width: 100vw;
    height: initial;
    padding-block: 4rem;
    color: ${props => props.theme.gray700};

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-position: center -1rem;

`

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;

    h2 {
        font-weight: 300;
        font-size: 2rem;
        overflow: hidden;

        ::before, ::after {
            background-color: ${props => props.theme.gray300};
            content: "";
            display: inline-block;
            height: 1px;
            position: relative;
            vertical-align: middle;
            width: 30%;
        }

        ::before {
            right: 0.5em;
            margin-left: -50%;
        }

        ::after {
            left: 0.5em;
            margin-right: -50%;
        }
    }

    strong {
        font-weight: 400;
        font-size: 4.5rem;
        letter-spacing: 0.5rem;
        margin-top: 1.5rem;
    }

    h1 {
        font-weight: 600;
        font-size: 6.5rem;
        color: ${props => props.theme.blue600};
        margin-bottom: 1.5rem;
    }

    span {
        text-transform: none;
        font-weight: 500;
        font-size: 2rem;
    }
`

export const NextMeetings = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    header {
        font-size: 2rem;
        border-bottom: 1px solid ${props => props.theme.gray200};
        padding-bottom: 1rem;
        text-transform: uppercase;
    }
`

export const BoxMeeting = styled.div`
    display: flex;
    background-color: ${props => props.theme.white};
    border-radius: 4px;
    box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.35);
`

export const MeetingDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.blue600};
    border: 3px solid ${props => props.theme.blue600};
    border-radius: 5px 0 0 5px;
    padding: 0.4rem 2rem 1rem;

    strong {
        font-size: 3.5rem;
        font-weight: bold;
    }

    span {
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
    }
`

export const MeetingContent = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    padding: 1rem 2.5rem;

    strong {
        color: ${props => props.theme.gray700};;
    }

    span {
        font-size: 1.5rem;
    }
`