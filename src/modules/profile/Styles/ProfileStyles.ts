import styled from 'styled-components'

export const Container = styled.main`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100vh;
  }
`

export const Content = styled.div`
  padding: 0 16px;
  max-width: 1200px;
  width: 100%;
  padding-top: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    position: relative;
  }
`
export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
  @media (min-height: 760px) {
    height: calc(100% - 254px);
  }
`

export const SelectedOptionContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`
