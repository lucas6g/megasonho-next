import styled from 'styled-components'

export const AtractionCard = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    border-radius: 4px;
    transition: all 0.5s;
    overflow: hidden;
    .atraction-name {
      opacity: 0;
      transition: all 0.5s;
      font-weight: 500;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.white};
    }

    button {
      position: absolute;
      transition: all 0.5s;
      bottom: -50px;
      left: 0.8rem;
      right: 0.8rem;
      border: none;
      height: 4rem;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.colors.gray};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      transition: all 0.4s;
      span {
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.darkBlue};
      }

      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
  .atraction-img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 4px;
  }

  &:hover {
    .overlay {
      background-color: rgba(0, 0, 0, 0.6);
      .atraction-name {
        opacity: 1;
      }
    }
    button {
      bottom: 1.2rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .overlay {
      .atraction-name {
        font-size: 1.6rem;
      }
      button {
        span {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .overlay {
      .atraction-name {
        font-size: 2rem;
      }
      button {
        left: 1.6rem;
        right: 1.6rem;
        height: 4.8rem;
        span {
          font-size: 1.6rem;
        }
        img {
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }
  }
`
