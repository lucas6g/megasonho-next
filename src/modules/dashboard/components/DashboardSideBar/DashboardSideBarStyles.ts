import styled, { css } from 'styled-components'

interface DashboardSideBarProps {
  isOpen: boolean
}

export const DashboardSideBar = styled.aside<DashboardSideBarProps>`
  top: 0;
  bottom: 0;
  width: 266px;
  right: -266px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  transition: all 0.5s ease;
  padding: 40px 16px 30px 16px;
  ${props =>
    props.isOpen &&
    css`
      right: 0;
    `};

  .menu-and-ctabtn-box {
    margin-top: 42px;
  }

  .sidebar-cta-btn {
    font-size: 12px;
  }
`
export const SidebarHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`
export const SideBarCloseButton = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  background: transparent;
`
export const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`

export const SideBarFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;

  .logo {
    height: 3rem;
    img {
      width: 20.7rem;
      height: 3rem;
    }
  }
`

interface SideBarBlourEfectProps {
  isSideBarOpen: boolean
}

export const SideBarBlourEfect = styled.div<SideBarBlourEfectProps>`
  background-color: ${({ theme }) => theme.colors.black};
  position: absolute;
  opacity: 0.4;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;

  ${props =>
    props.isSideBarOpen &&
    css`
      display: block;
    `};
`
