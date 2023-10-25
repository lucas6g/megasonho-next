import styled, { css } from 'styled-components'

interface MyMarqueProps {
  isGuestsLoading?: boolean
}

export const Container = styled.div<MyMarqueProps>`
  .marquee {
    gap: 16px;
    z-index: -1;
  }
  ${props =>
    props.isGuestsLoading &&
    css`
      margin-top: 20px;
      height: 45px;
      background-image: linear-gradient(
        -90deg,
        #e7edf1 0%,
        #f8f8f8 50%,
        #e7edf1 100%
      );
      background-size: 400% 400%;
      animation: shimmer 0.9s ease-in-out infinite;
      @keyframes shimmer {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: -135% 0%;
        }
      }
      &.white {
        background-image: linear-gradient(
          -90deg,
          #fff 0%,
          #e7edf1 50%,
          #fff 100%
        );
      }
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none !important;
  }
`
