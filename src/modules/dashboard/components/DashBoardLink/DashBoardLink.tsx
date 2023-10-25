import { useRouter } from 'next/router'
import { LinkProps } from 'next/link'
import { DashLink } from './DashBoardLinkStyles'
import { ReactNode } from 'react'

interface DashBoardLinkProps extends LinkProps {
  routes: string[]
  children: ReactNode
}

export function DashBoardLink({ children, href, routes }: DashBoardLinkProps) {
  const { pathname } = useRouter()
  const isActive = routes.includes(pathname)
  return (
    <DashLink isActive={isActive} href={href}>
      {children}
    </DashLink>
  )
}
