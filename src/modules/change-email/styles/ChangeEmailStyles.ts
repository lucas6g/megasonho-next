import styled from 'styled-components'

export const Container = styled.main`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100vh;
  }
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .actual-email-box {
      margin-bottom: 48px;
    }
  }
`
