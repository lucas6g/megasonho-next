import { AnchorHTMLAttributes } from 'react'
import { Link } from './FooterLinkStyles'

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
}

export function FooterLink({ linkText, href, ...rest }: FooterLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} href={String(href)} {...rest}>
      {linkText}
    </Link>
  )
}
