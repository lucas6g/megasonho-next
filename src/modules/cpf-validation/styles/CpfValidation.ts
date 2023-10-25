import styled, { css } from 'styled-components'

interface ContainerProps {
  hasValidationPending: boolean
}
export const Container = styled.main<ContainerProps>`
  position: relative;
  height: 100vh;

  ${({ hasValidationPending }) =>
    hasValidationPending &&
    css`
      overflow: hidden;
    `};
`

export const DashBlourEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
`
