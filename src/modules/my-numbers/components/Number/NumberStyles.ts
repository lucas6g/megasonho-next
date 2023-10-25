import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 16px;

  span {
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 14px;
    border-bottom: none;
    padding-bottom: unset;
  }
`
