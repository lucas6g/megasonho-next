import { LinkProps } from 'next/link'
import { Container } from './DashBoardCtaButtonStyles'
import { ReactNode } from 'react'

interface DashboardCtaButtonPros extends LinkProps {
  children: ReactNode
  className?: string
}

export function DashboardCtaButton(props: DashboardCtaButtonPros) {
  return (
    <Container className={props.className} href={props.href}>
      {props.children}
    </Container>
  )
}
