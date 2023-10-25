import styled, { css } from 'styled-components'

interface SkeletonAnimationProps {
  isDark?: boolean
}

export const SkeletonAnimation = styled.div<SkeletonAnimationProps>`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 0.9s ease-in-out infinite;

  ${props =>
    props.isDark &&
    css`
      background-image: linear-gradient(
        to right,
        #3a3a3a 0%,
        #3f3f3f 10%,
        #4a4a4a 20%,
        #3f3f3f 30%,
        #3a3a3a 50%,
        #3a3a3a 100%
      );
    `}

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`
