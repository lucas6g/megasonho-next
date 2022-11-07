import styled from 'styled-components'

export const HeaderMobile = styled.div`
  margin-bottom: 1.6rem;

  #logo-white {
    max-width: 17.6rem;
    width: 100%;
    height: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
