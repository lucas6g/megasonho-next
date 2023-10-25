import Link from 'next/link'
import styled from 'styled-components'

export const Content = styled.div`
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
`

export const ContentHeader = styled.header`
  margin: 0 auto;
  padding-top: 45px;

  .invite-guest-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    h2 {
      font-weight: 500;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .invite-guest-box {
      margin-bottom: 0;
      h2 {
        font-size: 22px;
        line-height: 22px;
        br {
          display: none;
        }
      }
    }
  }
`

export const LastGuestBox = styled.div`
  margin-bottom: 40px;
  .box-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3px;
    margin-bottom: 16px;
    h2 {
      font-weight: 500;
      font-size: 17px;
      color: ${({ theme }) => theme.colors.black};
    }

    p {
      color: #727272;
      span {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
  .last-guest-shimmer {
    width: 100%;
    height: 40px;
  }

  .box-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .last-guest-name-box {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        height: 24px;
        width: 24px;
      }

      span {
        color: ${({ theme }) => theme.colors.darkBlue};
        font-size: 14px;
        font-weight: 400;
      }
    }

    time {
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      color: #727272;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .has-no-guest {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 16px;
    opacity: 0.5;
    font-weight: 400;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
    .box-1 {
      gap: 67px;
      h2 {
        font-size: 22px;
      }

      p {
        font-size: 16px;
      }
    }

    .box-2 {
      .last-guest-name-box {
        gap: 14px;
        img {
          height: 40px;
          width: 40px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
`

export const Banners = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  padding-bottom: 45px;

  .shimmer-banner {
    height: 171px;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Banner = styled(Link)`
  width: 100%;
  position: relative;
  text-decoration: none;
  height: 171px;
  .banner-img {
    width: 100%;
    object-fit: cover;
    object-position: 90%;
  }

  div {
    position: absolute;
    top: 2.4rem;
    width: 100%;
    padding: 0 1.6rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    strong.numbers {
      font-size: 22px;
      line-height: 34px;
      color: ${({ theme }) => theme.colors.green};
      margin-bottom: 4px;
    }

    span {
      font-weight: 600;
      font-size: 22px;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.white};
    }
    .more {
      display: flex;
      align-items: center;
      font-size: 14px;
      gap: 12px;
      color: ${({ theme }) => theme.colors.white};
      margin-top: 12px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    div {
      padding: 0 4rem;
      span {
        font-size: 24px;
      }

      strong.numbers {
        font-size: 32px;
      }
    }
  }
`
