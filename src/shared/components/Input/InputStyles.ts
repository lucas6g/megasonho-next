import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  .error-message {
    position: absolute;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.red};
    margin-top: 4px;
  }

  .complete-email-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 339px;
    margin-top: 12px;

    button {
      width: 100%;
      max-width: 110px;
      height: 29px;
      border-radius: 4px;
      background-color: #eeeeee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.darkBlue};
      border: none;
      padding: 6px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    .complete-email-buttons {
      gap: 12px;
      button {
        font-size: 14px;
      }
    }
  }
`

interface InputBlockProps {
  isError: boolean
  isCorrect: boolean
}

export const InputBlock = styled.div<InputBlockProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 2px solid #cfd3d5;

  ${props =>
    props.isCorrect &&
    css`
      border-color: ${({ theme }) => theme.colors.green};
    `}
  ${props =>
    props.isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  .icons {
    position: relative;
    img {
      position: absolute;
      right: 0;
      bottom: 0.8rem;
    }
  }

  label {
    font-weight: 600;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 4px;
  }
`
interface StyledInputProps {
  isError: boolean
  isCorrect: boolean
}
export const StyledInput = styled.input<StyledInputProps>`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding-bottom: 8px;

  ${props =>
    props.isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  &::placeholder {
    color: #828b8f;
    font-weight: 400;
    font-size: 1.6rem;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
  }
`
