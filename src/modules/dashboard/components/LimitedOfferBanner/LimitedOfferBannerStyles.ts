import styled from 'styled-components'

export const LimitedTimeOfferBanner = styled.div`
  position: relative;
  .banner-img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 40px;
  }
`
export const LimitedOfferBannerContentMobile = styled.div`
  position: absolute;
  top: 2.4rem;
  width: 100%;
  padding: 0 1.6rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  .row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    strong {
      font-size: 22px;
      line-height: 28px;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .row-2 {
    margin-bottom: 8px;
    p {
      font-family: 400;
      font-size: 12px;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.white};

      span {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  .row-3 {
    span {
      display: flex;
      align-items: center;
      font-size: 12px;
      gap: 8px;
      color: ${({ theme }) => theme.colors.white};

      img {
        width: 5px;
        height: 8px;
      }
    }
  }

  @media (min-width: 615px) {
    display: none;
  }
`
export const LimitedOfferBannerContentDesktop = styled.div`
  display: none;
  position: absolute;
  top: 2.4rem;
  width: 100%;
  padding: 0 4rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  .column-1 {
    strong {
      font-size: 24px;
      line-height: 31px;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 4px;
    }
    p {
      font-family: 400;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.white};

      span {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.green};
      }
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

  @media (min-width: 615px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
