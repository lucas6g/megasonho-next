import styled from 'styled-components'

export const Container = styled.main`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100vh;
  }
`
