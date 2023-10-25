import Link from 'next/link'
import styled, { css } from 'styled-components'

interface DashLinkProps {
  isActive: boolean
}

export const DashLink = styled(Link)<DashLinkProps>`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  ${props =>
    props.isActive &&
    css`
      opacity: 1;
    `};
`
