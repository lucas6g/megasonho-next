import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  height: 4.4rem;
  border-radius: 10rem;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    background-color: ${darken(0.1, '#00A35B')};
  }
`
