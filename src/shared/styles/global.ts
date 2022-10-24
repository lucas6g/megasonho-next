import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}
html,body, input, textarea, button {
  font-family: ${({ theme }) => theme.fonts.lexend},  sans-serif;
}

html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
button {
  cursor: pointer;
}
`
