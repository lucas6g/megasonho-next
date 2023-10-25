import styled from 'styled-components'

export const Container = styled.main`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100vh;
  }
`
export const AvatarContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;
  margin-top: 12px;

  .info-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      margin-bottom: 0;
      font-size: 14px;
    }

    .description {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.darkBlue};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 80px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
