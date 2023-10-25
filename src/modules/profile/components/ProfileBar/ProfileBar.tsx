import * as S from './ProfileBarStyles'
import { ProfileBarLink } from './ProfileBarLink/ProfileBarLink'
import { useContext } from 'react'
import { AuthContext } from '@/shared/context/AuthContext'

interface ProfileBarProps {
  isSelectedOptionOpen?: boolean
  openSelectedOptionOnMobile: () => void
}

export function ProfileBar({
  isSelectedOptionOpen,
  openSelectedOptionOnMobile
}: ProfileBarProps) {
  const { user, signOut } = useContext(AuthContext)

  return (
    <S.Container isSelectedOptionOpen={isSelectedOptionOpen}>
      <S.Title>Editar Perfil</S.Title>

      <menu>
        <nav className="block-1">
          <ProfileBarLink
            onClick={openSelectedOptionOnMobile}
            isOpen={user?.verified_phone && Boolean(user?.document)}
            blocked={!user?.verified_phone || !user?.document}
            href={'/dashboard/profile/change-password'}
          >
            Alterar senha
          </ProfileBarLink>
          <ProfileBarLink
            onClick={() => signOut()}
            isVerified={user?.verified_email}
            href={'/'}
          >
            Sair
          </ProfileBarLink>
        </nav>
        <S.Title>Segurança</S.Title>
        <nav className="block-2">
          <ProfileBarLink
            onClick={openSelectedOptionOnMobile}
            isImportant={!user?.document}
            isVerified={Boolean(user?.document)}
            isOpen={!user?.document}
            href={'/dashboard/profile/cpf-validation'}
          >
            Validar CPF
          </ProfileBarLink>
          <ProfileBarLink
            isImportant={!user?.verified_phone}
            onClick={openSelectedOptionOnMobile}
            isVerified={user?.verified_phone}
            hasBorder={false}
            isOpen={!user?.verified_phone}
            href={'/dashboard/profile/phone-validation'}
          >
            Validar número de telefone
          </ProfileBarLink>
        </nav>
      </menu>
    </S.Container>
  )
}
