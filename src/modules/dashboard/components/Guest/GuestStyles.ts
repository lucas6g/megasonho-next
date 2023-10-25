import styled, { css } from 'styled-components'

interface ContainerProps {
  hasBorder?: boolean
  hasPadding?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  .last-guest-name-box {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      height: 24px;
      width: 24px;
    }

    span {
      color: ${({ theme }) => theme.colors.darkBlue};
      font-size: 14px;
      font-weight: 400;
    }
  }

  ${props =>
    props.hasBorder &&
    css`
      border-bottom: 1px solid #e6e6e6;
    `};

  ${props =>
    props.hasPadding &&
    css`
      padding: 20px 0;
    `};

  time {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    color: #727272;
    font-size: 14px;
    font-weight: 400;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .last-guest-name-box {
      gap: 14px;
      img {
        height: 40px;
        width: 40px;
      }
      span {
        font-size: 16px;
      }
    }
  }
`
