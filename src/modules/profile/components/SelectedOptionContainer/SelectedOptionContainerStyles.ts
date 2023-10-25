import styled, { css } from 'styled-components'

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
  @media (min-height: 760px) {
    height: calc(100% - 254px);
  }
`

export const Content = styled.form`
  padding: 0 16px;
  max-width: 1200px;
  width: 100%;
  padding-top: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    position: relative;
  }
`

export const SelectedOptionBackground = styled.div`
  display: none;
  background-color: #f9f9f9;
  left: 480px;
  right: -999999px;
  bottom: 0;
  top: 0;
  z-index: -1;
  position: absolute;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`

interface SelectedOptionContainerProps {
  isSelectedOptionOpen?: boolean
  isKeyBoardOpen: boolean
}

export const SelectedOptionContainer = styled.div<SelectedOptionContainerProps>`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 44px 16px 38px 16px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  ${({ isKeyBoardOpen }) =>
    isKeyBoardOpen &&
    css`
      padding-top: 16px;
    `};

  ${({ isSelectedOptionOpen }) =>
    !isSelectedOptionOpen &&
    css`
      display: none;
    `};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ isSelectedOptionOpen }) =>
      !isSelectedOptionOpen &&
      css`
        display: block;
      `};
    padding-left: 40px;
    padding-top: 0;
    position: static;
    background: unset;
  }
`
export const SelectedOptionContent = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    button {
      background: transparent;
      border: none;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.6;
    margin-bottom: 32px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
    box-shadow: 0 0 0 30px #ffffff inset !important;
  }
  input {
    background-color: #ffffff;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    min-width: 440px;
    max-width: 440px;

    header {
      button {
        display: none;
      }
    }

    h1 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 24px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #f9f9f9 inset !important;
      box-shadow: 0 0 0 30px #f9f9f9 inset !important;
    }
    input {
      background-color: #f9f9f9;
    }
  }
`

export const ButtonsContainerDesktop = styled.div`
  display: none;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  bottom: 24px;
  gap: 20px;
  right: 16px;

  a {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  button {
    max-width: 129px;
    height: 36px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
  @media (min-height: 800px) {
    bottom: 64px;
  }
`
interface ButtonsContainerMobileProps {
  isKeyBoardOpen: boolean
}
export const ButtonsContainerMobile = styled.div<ButtonsContainerMobileProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  margin-top: auto;

  ${({ isKeyBoardOpen }) =>
    isKeyBoardOpen &&
    css`
      margin-top: 32px;
    `};

  a {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  button {
    max-width: 129px;
    height: 36px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
