import { darken } from 'polished'
import styled from 'styled-components'

export const CTAButton = styled.button`
  border: none;
  width: 100%;
  height: 5.6rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  transition: background 0.4s;
  &:hover {
    border-bottom: 3px solid ${darken(0.2, '#00A35B')};
    background-color: ${darken(0.1, '#00A35B')};
  }
`
