import styled from 'styled-components'

export const GradientLine = styled.div`
  display: none;
  height: 8px;
  width: 100%;
  background: linear-gradient(
    88.31deg,
    #1374de -6.73%,
    #33a3fd 51.52%,
    #d9d9d9 98.57%
  );
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`
