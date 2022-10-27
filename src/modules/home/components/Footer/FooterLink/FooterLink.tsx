import { AnchorHTMLAttributes } from 'react'
import { Container } from './FooterLinkStyles'

import Link from 'next/link'

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
}

export function FooterLink({ linkText, href, ...rest }: FooterLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} href={String(href)}>
      <Container {...rest}>{linkText}</Container>
    </Link>
  )
}
