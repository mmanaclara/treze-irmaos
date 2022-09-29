import styled from 'styled-components'

import {
    Button,
    Dialog,
    DialogDismiss,
    DialogHeading,
    DialogDescription,
    useDialogState,
  } from "ariakit";

export const BookshopContainer = styled.main`
    margin-block: 3rem;
    margin-inline: auto;

    width: min(118rem, 100%);
    padding-inline: 2.5rem;
`

export const Wrapper = styled.div`
    margin-top: 1.5rem;

    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
`

export const BookBox = styled.a`
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

    button {
        margin-top: 1rem;
        width: fit-content;
        background-color: ${props => props.theme.blue600};
        border: none;
        border-radius: 8px;
        padding: 0.8rem 2rem;
        color: ${props => props.theme.gray100};
        cursor: pointer;
        font-size: 2rem;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        :hover {
            background-color: ${props => props.theme.blue700};
        }
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

export const DialogContainer = styled(Dialog)`
  max-width: calc(100% - 32px);
  max-height: calc(100% - 32px);
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;

  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  background-color: #2166A5;
  padding: 1rem;
  color: #F7F9F9;
  filter: drop-shadow(0 16px 24px rgba(0, 0, 0, 15%));
`