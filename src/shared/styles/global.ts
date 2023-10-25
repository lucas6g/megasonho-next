import { darken } from 'polished'
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
.swal-modal {
  background-color:${({ theme }) => theme.colors.white};
  border-radius: 0;
}
.swal-button-container {
  width: 100%;
  max-width: 100%;

}

.swal-button--confirm {
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 100px;
  padding:  1.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  border: none;
  transition: all 0.4s;

  }

  .swal-button.swal-button--confirm:hover {
   background-color: ${darken(0.1, '#00A35B')};
}


.swal-footer  {
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 32px;


}




`
