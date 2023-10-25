import { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import * as S from './ProfileBarLinkStyles'
import Image from 'next/image'

interface ProfileBarLinkProps extends LinkProps {
  children: ReactNode
  hasBorder?: boolean
  blocked?: boolean
  isImportant?: boolean
  isVerified?: boolean
  isOpen?: boolean
}

export function ProfileBarLink({
  children,
  href,
  hasBorder = true,
  blocked = false,
  isImportant = false,
  isOpen = false,
  isVerified = false,
  onClick
}: ProfileBarLinkProps) {
  return (
    <S.ProfileBarLink
      blocked={blocked}
      hasBorder={hasBorder}
      href={href}
      onClick={onClick}
    >
      {isImportant ? (
        <div>
          {children}
          <S.IsImportant>IMPORTANTE</S.IsImportant>
        </div>
      ) : (
        children
      )}

      {blocked && (
        <Image
          src={'/icons/lock-profile.svg'}
          alt="Icone de um Cadeado"
          width={20}
          height={20}
        />
      )}
      {isOpen && (
        <Image
          style={{ marginRight: 8 }}
          src={'/icons/arrow-profile-blue.svg'}
          alt="Icone de uma seta azul para direita"
          width={7}
          height={12}
        />
      )}
      {isVerified && (
        <Image
          src={'/icons/profile-verified.svg'}
          alt="Icone de Verificado"
          className="verified"
          width={17}
          height={17}
        />
      )}
    </S.ProfileBarLink>
  )
}
