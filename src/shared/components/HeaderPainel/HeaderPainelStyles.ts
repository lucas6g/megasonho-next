import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
export const InitialLetter = styled.div`
  width: 40px;
  height: 40px;
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
export const MyPanellButton = styled.button`
  height: 40px;
  min-width: 133px;
  background: transparent;
  border: 1px solid #727272;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkBlue};
`
export const CloseButton = styled.button`
  display: none;
  border: none;
  background: transparent;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`
