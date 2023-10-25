import Link from 'next/link'
import styled, { css } from 'styled-components'

interface ProfileBarLinkProps {
  hasBorder: boolean
  blocked: boolean
}

export const ProfileBarLink = styled(Link)<ProfileBarLinkProps>`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkBlue};

  ${props =>
    props.hasBorder &&
    css`
      border-bottom: 1px solid #eaecec;
    `};
  ${props =>
    props.blocked &&
    css`
      pointer-events: none;
    `};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    width: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .verified {
      width: 24px;
      height: 24px;
    }
    padding-bottom: 20px;
  }
`
export const IsImportant = styled.div`
  height: 20px;
  width: 100%;
  max-width: 75px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  padding: 2px 4px;
  font-weight: 400;
  border-radius: 4px;
`
