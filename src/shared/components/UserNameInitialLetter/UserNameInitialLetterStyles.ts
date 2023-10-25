import styled from 'styled-components'

export const InitialLetter = styled.div`
  border-radius: 50%;
  background-color: #1d33a7;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`
