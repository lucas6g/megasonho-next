import * as S from './DashboardSideBarStyles'
import Image from 'next/image'
import { DashBoardLink } from '@/modules/dashboard/components/DashBoardLink/DashBoardLink'
import { DashboardCtaButton } from '@/modules/dashboard/components/DashBoardCtaButton/DashBoardCtaButton'
import Link from 'next/link'
import {
  activeDashboardRoutes,
  activeProfileRoutes
} from '@/shared/utils/activeRoutes'

interface DashboardSideBarProps {
  isSideBarOpen: boolean
  closeSideBar: () => void
}

export function DashboardSideBar({
  isSideBarOpen,
  closeSideBar
}: DashboardSideBarProps) {
  return (
    <>
      <S.DashboardSideBar isOpen={isSideBarOpen}>
        <S.SidebarHeader>
          <S.SideBarCloseButton onClick={closeSideBar}>
            <Image
              src={'/icons/close.svg'}
              alt="Icone de fechar"
              width={24}
              height={24}
            />
          </S.SideBarCloseButton>
        </S.SidebarHeader>
        <div className="menu-and-ctabtn-box">
          <S.SideBarMenu>
            <DashBoardLink routes={activeDashboardRoutes} href={'/dashboard'}>
              Início
            </DashBoardLink>
            <DashBoardLink
              routes={activeProfileRoutes}
              href={'/dashboard/profile'}
            >
              Perfil
            </DashBoardLink>
          </S.SideBarMenu>

          <DashboardCtaButton className="sidebar-cta-btn" href={'/plans'}>
            <Image
              src={'/icons/wallet.svg'}
              alt="Icone de uma Carteira"
              width={16}
              height={17}
            />
            Compre mais número da sorte
          </DashboardCtaButton>
        </div>

        <S.SideBarFooter>
          <Link className="logo" href="/">
            <Image
              src={'/icons/logo.svg'}
              alt="Logo da MEGASONHO"
              width={345}
              height={50}
            />
          </Link>
        </S.SideBarFooter>
      </S.DashboardSideBar>
      <S.SideBarBlourEfect
        onClick={closeSideBar}
        isSideBarOpen={isSideBarOpen}
      />
    </>
  )
}
