import { ProfileBar } from '@/modules/profile/components/ProfileBar/ProfileBar'
import * as S from './SelectedOptionContainerStyles'
import { Button } from '@/shared/components/Button/Button'
import Link from 'next/link'
import { useState, ReactNode, FormEventHandler, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import useDetectKeyboardOpen from 'use-detect-keyboard-open'

interface SelectedOptionContainerProps {
  title?: string
  instructions?: string
  hasCancelLink?: boolean
  isClean?: boolean
  children?: ReactNode
  submitButtonText?: string
  canOpenOnMobile?: boolean
  onSubmit?: FormEventHandler<HTMLFormElement>
  buttonType?: 'button' | 'submit' | 'reset'
  onButtonClick?: () => Promise<void>
  isSubmitButtonLoading?: boolean
  hasButtons?: boolean
}

export function SelectedOptionContainer({
  children,
  instructions,
  title,
  isClean,
  onSubmit,
  canOpenOnMobile = true,
  hasCancelLink = true,
  submitButtonText,
  isSubmitButtonLoading,
  buttonType = 'submit',
  hasButtons = true,
  onButtonClick
}: SelectedOptionContainerProps) {
  const [isKeyBoardOpen, setIsKeyBoardOpen] = useState(false)
  const isDeskTop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const keyboardOpen = useDetectKeyboardOpen(100)

  useEffect(() => {
    setIsKeyBoardOpen(keyboardOpen)
  }, [keyboardOpen])

  const hasWindow = typeof window !== 'undefined'

  let [isSelectedOptionOpen, setIsSelectedOptionOpen] = useState<
    boolean | undefined
  >()
  if (hasWindow) {
    ;[isSelectedOptionOpen, setIsSelectedOptionOpen] = useState<
      boolean | undefined
    >(!isDeskTop)
  }

  const closeSelectedOption = () => {
    setIsSelectedOptionOpen(false)
  }

  const openSelectedOption = () => {
    setIsSelectedOptionOpen(true)
  }

  return (
    <S.Container>
      <S.Content onSubmit={onSubmit}>
        <ProfileBar
          isSelectedOptionOpen={
            !isDeskTop && isSelectedOptionOpen && canOpenOnMobile
          }
          openSelectedOptionOnMobile={openSelectedOption}
        />

        <S.SelectedOptionContainer
          isKeyBoardOpen={isKeyBoardOpen}
          isSelectedOptionOpen={
            !isDeskTop && isSelectedOptionOpen && canOpenOnMobile
          }
        >
          <S.SelectedOptionContent>
            {!isClean && (
              <>
                <header>
                  <h1>{title}</h1>
                  <button onClick={closeSelectedOption} type="button">
                    <Image
                      src={'/icons/close.svg'}
                      alt="Icone de fechar"
                      width={40}
                      height={40}
                    />
                  </button>
                </header>
                {instructions && <p>{instructions}</p>}
              </>
            )}

            {children}
          </S.SelectedOptionContent>

          {!isClean && hasButtons && (
            <S.ButtonsContainerMobile isKeyBoardOpen={isKeyBoardOpen}>
              {hasCancelLink && (
                <Link href={'/dashboard/profile'}>Cancelar</Link>
              )}

              <Button onClick={onButtonClick} type={buttonType}>
                <span>{submitButtonText}</span>
              </Button>
            </S.ButtonsContainerMobile>
          )}
        </S.SelectedOptionContainer>

        {!isClean && (
          <>
            {hasButtons && (
              <S.ButtonsContainerDesktop>
                {hasCancelLink && (
                  <Link href={'/dashboard/profile'}>Cancelar</Link>
                )}
                <Button
                  onClick={onButtonClick}
                  isLoading={isSubmitButtonLoading}
                  type={buttonType}
                >
                  <span>{submitButtonText}</span>
                </Button>
              </S.ButtonsContainerDesktop>
            )}
            <S.SelectedOptionBackground />
          </>
        )}
      </S.Content>
    </S.Container>
  )
}
