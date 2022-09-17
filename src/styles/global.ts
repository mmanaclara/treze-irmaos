import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%; // 1rem -> 10px
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue600};
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.gray700};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font: 400 1.6rem Raleway, sans-serif;
  }
`