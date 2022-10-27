import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 3.2rem;
  height: 812px;

  div {
    position: absolute;
    height: 812px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 26rem;
    padding: 26rem 1.6rem 0 1.6rem;
    background: linear-gradient(
      84.31deg,
      rgba(27, 27, 27, 0.5) 0.6%,
      rgba(27, 27, 27, 0.6) 49.02%,
      rgba(27, 27, 27, 0) 81.64%
    );

    .white-clover {
      width: 8rem;
      height: 8rem;
      margin-bottom: 3.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 16rem;
        height: 16rem;
        margin-bottom: 7.2rem;
      }
    }

    h2 {
      font-weight: 600;
      font-size: 2.4rem;
      max-width: 935px;
      text-align: center;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.white};

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 4.8rem;
        line-height: 6rem;

        br {
          display: none;
        }
      }
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    div {
      height: 1000px;
    }
    height: 1000px;
  }
`
