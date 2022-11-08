import { Link } from './FooterLinkStyles'

interface FooterLinkProps {
  linkText: string
  href: string
}

export function FooterLink({ linkText, href }: FooterLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} href={href}>
      {linkText}
    </Link>
  )
}
