import styled, { css } from 'styled-components'
import CodeLib from 'react-input-verification-code'

interface InputPros {
  isError: boolean
}

export const Container = styled.div<InputPros>`
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
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.gray};

    ${props =>
      props.isError &&
      css`
        border: 2px solid red;
      `};
  }
  @media (min-width: 1024px) {
    max-width: 408px;
    .ReactInputVerificationCode__container {
      gap: 6px;
      width: unset;
    }
    .ReactInputVerificationCode__item {
      height: 56px;
      width: 56px;
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

export const Confirmation = styled(CodeLib)``
