import styled from 'styled-components'

export const Header = styled.header`
  height: 9.3rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 114px;
  }
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;

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
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
      span {
        display: none;
      }
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    a {
      height: 32px;
      width: 32px;
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
      button {
        margin: 0;
        min-width: 12.6rem;
        height: 4rem;
        border-radius: 100px;
        span {
          display: inline;
        }
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      img {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xg}) {
    padding: 0;
  }
`
