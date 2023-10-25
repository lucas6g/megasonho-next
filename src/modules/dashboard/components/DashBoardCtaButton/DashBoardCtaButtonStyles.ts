import Link from 'next/link'
import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled(Link)`
  height: 3.7rem;
  border-radius: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  text-decoration: none;
  transition: background-color 0.5s;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  font-size: 1.6rem;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${darken(0.1, '#00A35B')};
  }
`
