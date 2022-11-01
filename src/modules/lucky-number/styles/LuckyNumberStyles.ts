import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const LuckyNumberContainer = styled.div`
  padding: 16px;
  position: relative;
  background-position: 90%;
  background-size: cover;

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

export const ProgresseBarDesk = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: flex-end;
    height: 32px;

    button {
      border: none;
      background: transparent;
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 50%;
    }
  }
`

export const LuckyNumberForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px 16px;
  border-radius: 4px;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
    br {
      display: none;
    }
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 16px;
  }

  hr {
    margin-top: 32px;
    margin-bottom: 32px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.2;
    height: 3px;
  }
  .validate-number-message {
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 16px;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .get-more-button {
    margin-top: 48px;
  }

  @media (min-width: 1024px) {
    h1 {
      br {
        display: block;
      }
    }
    max-width: 465px;
  }
`

export const LuckyNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  strong {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`
