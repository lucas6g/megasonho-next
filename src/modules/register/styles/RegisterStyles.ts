import styled, { css } from 'styled-components'

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
  background-position: 90%;
  background-size: cover;
  height: auto;

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
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.4rem 1.6rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  button {
    margin-top: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 44.8rem;
    padding-top: 2rem;
    padding-bottom: 4px;
  }
`
export const ProgressBarMobile = styled.div`
  margin-bottom: 4.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const ProgresseBarDesk = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: flex-end;

    button {
      border: none;
      background: transparent;
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 50%;
    }
  }
`
export const TermsCheckBox = styled.div`
  display: flex;
  gap: 1rem;

  span {
    text-align: left;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.darkBlue};

    a {
      text-decoration: none;
      display: inline-block;
      color: ${({ theme }) => theme.colors.blue};
    }

    a::after {
      content: '';
      display: block;
      width: 0px;
      height: 0.2rem;
      background: ${({ theme }) => theme.colors.blue};
      transition: width 0.7s;
    }
    a:hover::after {
      width: 100%;
    }
  }
`

interface CheckBoxProps {
  isError: boolean
}

export const CheckBox = styled.input<CheckBoxProps>`
  min-width: 1.6rem;
  min-height: 1.6rem;
  max-height: 1.6rem;
  border-radius: 4px;
  margin-top: 2px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  appearance: none;
  cursor: pointer;
  ${props =>
    props.isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `};

  &:checked {
    border-color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    background-image: url('/icons/check-white.svg');
    background-repeat: no-repeat;
  }
`
