import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus{
  outline: 0;
  box-shadow: 0 0 0 2px rgb(18, 18, 20);
}
body{
  background-color: rgb(18, 18, 20);
  color: rgb(196, 196, 204);
  -webkit-font-smoothing: antialiased;
}
border, input, textarea,button{
  font-family: 'Roboto', sans-serif;
  font-weight:400;
  font-size: 1rem;
}
`