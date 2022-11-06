import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  .logo {
    img {
      width: 17.8rem;
      height: 2.4rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    img {
      width: 2.9rem;
      height: 2.9rem;
    }
    button {
      margin: 0;
      min-width: 12.6rem;
      height: 4rem;
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    a {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .logo {
      img {
        width: 34.5rem;
        height: 5rem;
      }
    }

    div {
      img {
        width: 3.2rem;
        height: 3.2rem;
      }
      a {
        display: inline;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 17.8rem;
  }
`
