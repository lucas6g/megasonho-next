import styled from 'styled-components'

export const SubHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 144px;
    display: flex;
    align-items: center;
  }
`

export const SubheaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 32px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
    align-items: center;
  }
`
export const UserWelcomeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  .avatar {
    height: 48px;
    min-width: 48px;
    max-width: 48px;
    strong {
      font-size: 28px;
    }
  }
  .shimmer-avatar {
    height: 48px;
    min-width: 48px;

    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      white-space: nowrap;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.8;
    }

    strong {
      font-weight: 700;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
    }
    .shimmer-user-name {
      width: 190px;
      height: 23px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    div {
      span {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;

    div {
      span {
        font-size: 16px;
      }

      strong {
        font-size: 24px;
      }
      .shimmer-user-name {
        width: 190px;
        height: 30px;
      }
    }

    .avatar {
      height: 54px;

      max-width: 54px;
      strong {
        font-size: 28px;
      }
    }
    .shimmer-avatar {
      height: 54px;
      min-width: 54px;
    }
  }
`
export const LuckyNumberAndGuestsInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoRow = styled.div`
  display: flex;
  gap: 16px;
`
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .label {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
  }

  .shimmer-guests-quantity {
    height: 20px;
    width: 118px;
  }
  .shimmer-lucky-numbers-quantity {
    height: 20px;
  }

  div {
    display: flex;
    height: 20px;
    align-items: center;

    p {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
      span {
        color: ${({ theme }) => theme.colors.green};
      }
    }

    img {
      margin-left: 4px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    div {
      p {
        font-size: 1.6rem;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .label {
      font-size: 1.6rem;
    }

    div {
      p {
        font-size: 2rem;
      }
      .arrow {
        margin-left: 8px;
        height: 14px;
        width: 14px;
        opacity: 0.8;
      }
      .guests {
        margin-left: 8px;
        height: 25px;
        width: 25px;
        opacity: 0.8;
      }
    }
    .shimmer-guests-quantity {
      width: 168px;
    }
    .shimmer-lucky-numbers-quantity {
      width: 150px;
    }
  }
`

export const Divider = styled.div`
  width: 2px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.3;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 49px;
  }
`
