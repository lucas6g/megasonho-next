import styled from 'styled-components'

export const ImageBackground = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: relative;
    .back-image {
      width: 100%;
      object-fit: cover;
      height: 100vh;
    }

    div {
      position: absolute;
      top: 2.6rem;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
`
