import styled, { css } from 'styled-components'

export const Container = styled.div`
  input {
    display: none;
  }
`

interface LabelProps {
  error?: boolean
  allowEdit: boolean
}

export const Label = styled.label<LabelProps>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #1d33a7;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  strong {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ allowEdit }) =>
    !allowEdit &&
    css`
      pointer-events: none;
    `}
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80px;
    height: 80px;
    img {
      width: 80px;
      height: 80px;
    }
  }
`

export const BlourEfect = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80px;
    height: 80px;
  }
`
