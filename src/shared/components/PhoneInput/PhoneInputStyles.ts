import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  .error-message {
    position: absolute;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.red};
  }
`

interface InputBlockProps {
  isError: boolean
}

export const InputBlock = styled.div<InputBlockProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;

  div {
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
  }
`
interface PhoneProps {
  isError: boolean
  isCorrect: boolean
}

export const Phone = styled(ReactPhoneInput)<PhoneProps>`
  .open {
    width: 100%;
  }

  .phone-input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #c0c5c7;
    width: 100%;
    border-radius: 0;
    padding-left: 3.2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 500;
    font-size: 1.6rem;
    &::placeholder {
      color: #828b8f;
      font-weight: 400;
      font-size: 1.6rem;
    }

    ${props =>
      props.isError &&
      css`
        border-color: ${({ theme }) => theme.colors.red};
      `}
    ${props =>
      props.isCorrect &&
      css`
        border-color: ${({ theme }) => theme.colors.green};
      `}
  }
  .input-phone-button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #c0c5c7;
    border-radius: 0;
    z-index: auto !important;
    ${props =>
      props.isError &&
      css`
        border-color: ${({ theme }) => theme.colors.red};
      `}
    ${props =>
      props.isCorrect &&
      css`
        border-color: ${({ theme }) => theme.colors.green};
      `}
    .selected-flag {
      padding: 0;
      width: 3.2rem;
      &:hover {
        background-color: transparent;
      }
      .flag {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
      }
      .arrow {
        display: none;
      }
    }
  }
  .input-phone-dropdown {
    width: 100%;
  }
`
