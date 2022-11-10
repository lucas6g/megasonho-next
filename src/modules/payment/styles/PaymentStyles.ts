import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PaymentContainer = styled.div`
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

export const PaymentContent = styled.div`
  header:first-child {
    margin-bottom: 24px;
  }

  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .continue {
    margin-top: 72px;
    min-height: 46px;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 10px;
    margin-bottom: 24px;
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
      font-size: 32px;
      line-height: 40px;
    }
    p {
      margin-top: 16px;
      margin-bottom: 28px;
      font-size: 16px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`

export const PixKeyBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
  border: 2px solid rgba(46, 61, 69, 0.2);
  border-radius: 4px;
  padding-left: 16px;

  .pix-image {
    margin-right: 8px;
  }

  input {
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.gray};
    border: none;
  }

  span {
    color: ${({ theme }) => theme.colors.blue};

    justify-self: center;
  }
`

export const PixQrCodeBox = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const CopyButton = styled.button`
  height: 100%;
  max-width: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: unset;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
