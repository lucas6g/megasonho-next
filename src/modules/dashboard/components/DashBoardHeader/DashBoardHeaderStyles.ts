import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: 80px;
  border-bottom: 1px solid #323232;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 110px;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;

  .desktop-cta-button {
    display: none;
  }

  .logo {
    height: 3rem;
    img {
      width: 17rem;
      height: 3rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .desktop-cta-button {
      display: flex;
      max-width: 261px;
      padding: 8px;
    }
    .logo {
      img {
        width: 20.7rem;
      }
    }
  }
`
export const DesktopMenu = styled.menu`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`
export const SideBarHamburguerButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
