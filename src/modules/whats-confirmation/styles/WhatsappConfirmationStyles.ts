import styled, { css } from 'styled-components'
import CodeLib from 'react-input-verification-code'

interface InputPros {
  isErrored: boolean
}

export const Confirmation = styled(CodeLib)<InputPros>``

export const Container = styled.div`
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const FormContainer = styled.div`
  padding: 1.6rem;
  position: relative;
  background-position: 60%;
  background-size: cover;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0.8rem;
    background-image: unset !important;
    height: 100vh;
  }
  @media (min-height: 800px) {
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

interface FormPros {
  isError: boolean
}

export const ProgresseBarDesk = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 48px;

    button {
      border: none;
      background: transparent;
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 50%;
    }
  }
`

export const Form = styled.form<FormPros>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.6rem;
  border-radius: 4px;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.colors.darkBlue};

    img {
      width: 32px;
      height: 32px;
      margin-bottom: -6px;
    }
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  span {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};

    button {
      background: transparent;
      border: none;
      text-decoration: none;
      display: inline-block;
      color: ${({ theme }) => theme.colors.blue};
      font-size: 16px;
    }

    button::after {
      content: '';
      display: block;
      width: 0px;
      height: 2px;
      background: ${({ theme }) => theme.colors.blue};
      transition: width 0.7s;
    }
    button:hover::after {
      width: 100%;
    }
  }

  .ReactInputVerificationCode__container {
    width: 100%;
    margin-bottom: 16px;
    gap: 6px;
    input {
      width: 0;
      height: 0;
      left: 0;
    }
  }

  .ReactInputVerificationCode__item {
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3.11956px;
    background-color: ${({ theme }) => theme.colors.gray};
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${props =>
      props.isError &&
      css`
        border: 2px solid red;
      `};
  }
  @media (min-width: 1024px) {
    .ReactInputVerificationCode__container {
      max-width: 368px;
    }
    max-width: 448px;

    h1 {
      font-size: 3.2rem;
      line-height: 4rem;
    }
    span {
      white-space: nowrap;
    }
  }
`

interface InvalidCodeProps {
  isError: boolean
}

export const InvalidCode = styled.div<InvalidCodeProps>`
  display: none;
  align-items: center;
  height: 20px;
  gap: 8px;
  margin-bottom: 16px;
  img {
    height: 20px;
    width: 20px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${props =>
    props.isError &&
    css`
      display: flex;
    `};
`
