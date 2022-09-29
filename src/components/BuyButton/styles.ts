import styled from 'styled-components'

import { Dialog } from "ariakit"

export const BuyButtonContainer = styled.div`
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
        transform: translateY(-8%);
    }
  }
`

export const DialogContainer = styled(Dialog)`
  max-height: fit-content;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;

  display: flex;
  width: fit-content;
  max-width: 44rem;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  background-color: #2166A5;
  padding: 2.5rem;
  color: #F7F9F9;
  filter: drop-shadow(0 16px 24px rgba(0, 0, 0, 15%));
  box-shadow: 0 0 20px 80rem rgba(0, 0, 0, 0.5);


  text-align: center;

  button {
    cursor: pointer;
    align-self: flex-end;
    background: transparent;
    color: ${props => props.theme.gray100};
    border: none;
    border-radius: 8px;
    padding: 5px;
    transition: all 0.2s;
    font-size: 2.4rem;

    :hover {
        background-color: ${props => props.theme.blue200};
    }
  }

  header {
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: -2rem;
  }

  p {
    padding: 1rem 1rem;
    font-size: 1.8rem;
    line-height: 3rem;
  }

  a {
    background-color: ${props => props.theme.gray100};
    color: ${props => props.theme.blue600};
    font-weight: 700;
    padding: 1rem 3rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`