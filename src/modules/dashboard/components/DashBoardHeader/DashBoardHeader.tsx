import { DashBoardLink } from '@/modules/dashboard/components/DashBoardLink/DashBoardLink'
import { DashboardCtaButton } from '../DashBoardCtaButton/DashBoardCtaButton'
import * as S from './DashBoardHeaderStyles'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { DashboardSideBar } from '../DashboardSideBar/DashboardSideBar'
import {
  activeDashboardRoutes,
  activeProfileRoutes
} from '@/shared/utils/activeRoutes'

export function DashBoardHeader() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  function openSideBar() {
    setIsSideBarOpen(true)
  }
  function closeSideBar() {
    setIsSideBarOpen(false)
  }
  return (
    <>
      <S.Header>
        <S.HeaderContent>
          <Link className="logo" href="/">
            <Image
              src={'/icons/logo.svg'}
              alt="Logo da MEGASONHO"
              width={345}
              height={50}
            />
          </Link>

          <S.DesktopMenu>
            <DashBoardLink routes={activeDashboardRoutes} href={'/dashboard'}>
              Início
            </DashBoardLink>
            <DashBoardLink
              routes={activeProfileRoutes}
              href={'/dashboard/profile'}
            >
              Perfil
            </DashBoardLink>
          </S.DesktopMenu>

          <S.SideBarHamburguerButton onClick={openSideBar}>
            <Image
              src={'/icons/hamburguer-menu.svg'}
              alt="Icone Menu Hamburguer"
              width={16}
              height={10}
            />
          </S.SideBarHamburguerButton>

          <DashboardCtaButton className="desktop-cta-button" href={'/plans'}>
            <Image
              src={'/icons/wallet.svg'}
              alt="Icone de uma Carteira"
              width={16}
              height={17}
            />
            Comprar mais números
          </DashboardCtaButton>
        </S.HeaderContent>
      </S.Header>

      <DashboardSideBar
        isSideBarOpen={isSideBarOpen}
        closeSideBar={closeSideBar}
      />
    </>
  )
}
