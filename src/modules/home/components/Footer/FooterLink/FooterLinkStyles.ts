import styled from 'styled-components'

export const Container = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  opacity: 0.6;
  white-space: nowrap;
  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    opacity: 0.9;
  }
`
