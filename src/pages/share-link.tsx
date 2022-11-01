import * as S from '@/modules/share-link/styles/ShareLinkStyles'
import Image from 'next/image'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { Button } from '@/shared/components/Button/Button'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import useCopy from 'use-copy'
import { useEffect } from 'react'
import api from '@/shared/services/api'
import { NextPage } from 'next'
import { HeaderPainel } from '@/shared/components/HeaderPainel/HeaderPainel'

const ShareLink: NextPage = () => {
  let baseUrl = ''
  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin
  }
  const shareLinkUrl = `${baseUrl}/?r=${''}`
  const [copied, copy, setCopied] = useCopy(shareLinkUrl)

  useEffect(() => {
    async function sendShareLink() {
      await api.post('/users/send-message/', {
        message: `*${String(
          'Viado'
        )}*, aumente suas chances de concorrer a viagem dos seus sonhos. Compartilhe o seu link de indicação da *MEGASONHO*:`
      })
      await api.post('/users/send-message/', {
        message: shareLinkUrl
      })
    }
    sendShareLink()
  }, [])

  function handleCopyToClipBoard() {
    copy()

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <S.Container>
      <ImageBackground imgUrl={'/images/share-link-back.jpg'} />

      <S.ShareLinkContainer
        style={{
          backgroundImage: `url(/images/back-whats.jpg)`
        }}
      >
        <S.HeaderMobile>
          <Image
            src={'/icons/logo.svg'}
            alt="Imagem de fundo"
            width={345}
            height={50}
            id="logo-white"
          />
          <button type="button">
            <Image
              src={'/icons/close.svg'}
              alt="Icone de fechar"
              width={32}
              height={32}
            />
          </button>
        </S.HeaderMobile>

        <S.ShareLinkContent>
          <HeaderPainel nameInitialLetter="L" />
          <h1>Aumente as suas chances 😍🎢</h1>

          <p>
            Esse é o seu link compartilhamento, cada pessoa que utilizar você
            ganha mais pontos!
          </p>

          <S.LinkBox>
            <input readOnly type="text" value={shareLinkUrl} />

            <S.CopyButton onClick={handleCopyToClipBoard}>
              {copied ? (
                <span>Copiado</span>
              ) : (
                <Image
                  src={'/icons/copy-blue.svg'}
                  alt="Icone de Copiar Link"
                  width={24}
                  height={24}
                />
              )}
            </S.CopyButton>
          </S.LinkBox>

          <span className="text">
            Lembre-se você só ganha pontos se quem usar seu link, concluir o
            cadastro.
          </span>

          <Button className="continue">
            <span>Continuar</span>
          </Button>
        </S.ShareLinkContent>
        <GradientLine />
      </S.ShareLinkContainer>
    </S.Container>
  )
}
export default ShareLink
