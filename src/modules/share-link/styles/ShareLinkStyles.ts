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

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0.8rem;
    background-image: unset !important;
    height: 100vh;
  }
  @media (min-height: 600px) {
    height: 100vh;
  }
`
export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;

  #close-icon {
    height: 3.2rem;
    width: 3.2rem;
  }
  button {
    border: none;
    background: transparent;
  }

  #logo-white {
    max-width: 17.6rem;
    width: 100%;
    height: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const ShareLinkContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;

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

  .continue {
    margin-top: 32px;
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

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 16px;
  border: 2px solid rgba(46, 61, 69, 0.2);
  border-radius: 4px;
  padding-left: 16px;

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
