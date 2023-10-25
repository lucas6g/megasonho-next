import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ShareLinkContainer = styled.div`
  padding: 16px;
  position: relative;
  background-position: 60%;
  background-size: cover;
  height: 100%;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: unset !important;
    height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xg}) {
    padding: 0;
    padding-left: 9.6rem;
  }
`

export const ShareLinkContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .continue {
    margin-top: 72px;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 16px;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  span.text {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #727272;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
    padding: 0;
    height: 100%;
    padding-top: 4.8rem;
    .continue {
      margin-bottom: 46px;
      margin-top: auto;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
    p {
      font-size: 16px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`
