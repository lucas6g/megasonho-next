import styled, { css } from 'styled-components'

interface ContainerProps {
  isSelectedOptionOpen?: boolean
}

export const Container = styled.aside<ContainerProps>`
  display: flex;
  flex-direction: column;

  ${props =>
    props.isSelectedOptionOpen &&
    css`
      display: none;
    `};

  menu {
    nav {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .block-1 {
      margin-bottom: 32px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 480px;
    width: 100%;

    menu {
      max-width: 352px;
      nav {
        gap: 20px;
      }
      .block-1 {
        margin-bottom: 56px;
      }
    }
  }
`
export const Title = styled.h1`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
`
