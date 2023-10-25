import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 32px;
  padding-bottom: 32px;

  .luck-number-not-found {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 16px;
    opacity: 0.5;
    font-weight: 400;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const InputBlock = styled.div`
  display: flex;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  h1 {
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
    h1 {
      font-size: 22px;
    }
  }
`
interface SearchInputContainerProps {
  isError: boolean
}
export const SearchInputContainer = styled.form<SearchInputContainerProps>`
  height: 48px;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  button {
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0px 4px 4px 0px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  .error-message {
    position: absolute;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.red};
    margin-top: 4px;
    bottom: -24px;
    visibility: hidden;
  }
  ${props =>
    props.isError &&
    css`
      .error-message {
        visibility: visible;
      }
      border-color: ${({ theme }) => theme.colors.red};
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 448px;
  }
`

interface StyledInputProps {
  maskChar: null
}

export const StyledInput = styled(InputMask)<StyledInputProps>`
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  border: none;
  font-size: 14px;
  padding-left: 12px;
  color: #727272;
  font-weight: 400;
  border-radius: 4px;

  &::placeholder {
    color: #727272;
    font-size: 14px;
    font-weight: 400;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`

export const NumbersList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;

  .luck-number-shimmer {
    height: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 56px;
    .luck-number-shimmer {
      height: 64px;
    }
  }
  @media (min-width: 1232px) {
    grid-column-gap: 84px;
  }
`

export const Line = styled.div`
  display: none;
  height: 1px;
  grid-column: 1 / -1;
  background-color: #e6e6e6;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`
