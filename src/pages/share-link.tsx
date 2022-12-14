import * as S from '@/modules/share-link/styles/ShareLinkStyles'
import Image from 'next/image'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { Button } from '@/shared/components/Button/Button'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import useCopy from 'use-copy'
import { useContext, useEffect } from 'react'
import api from '@/shared/services/api'
import { NextPage } from 'next'
import { HeaderPainel } from '@/shared/components/HeaderPainel/HeaderPainel'
import { useRouter } from 'next/router'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'
import { AuthContext } from '@/shared/context/AuthContext'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'

const ShareLink: NextPage = () => {
  const { user } = useContext(AuthContext)

  let baseUrl = ''
  let codeReference: string | null = ''
  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin
    codeReference = localStorage.getItem('@MEGASONHO:code_reference')
  }
  const shareLinkUrl = `${baseUrl}/?r=${codeReference as string}`
  const [copied, copy, setCopied] = useCopy(shareLinkUrl)
  const router = useRouter()

  useEffect(() => {
    if (!user) return

    async function sendShareLink() {
      await api.post(
        `/whatsapp/send-message?user_uuid=${user?.uuid as string}`,
        {
          message: `*${String(
            user?.name.split(' ')[0]
          )}*, aumente suas chances de concorrer a viagem dos seus sonhos. Compartilhe o seu link de indicação da *MEGASONHO*:`
        }
      )
      await api.post(
        `/whatsapp/send-message?user_uuid=${user?.uuid as string}`,
        {
          message: shareLinkUrl
        }
      )
    }
    sendShareLink()
  }, [user])

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
        <HeaderMobile />

        <S.ShareLinkContent>
          <HeaderPainel />
          <h1>Aumente as suas chances 😍🎢</h1>

          <p>
            Esse é o seu link de compartilhamento, cada pessoa que utilizar fará
            você ganhar mais pontos!
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
            Lembre-se que você só ganhará pontos se quem utilizar o seu link,
            concluir o cadastro.
          </span>

          <Button
            onClick={() => {
              router.push('/plans')
            }}
            className="continue"
          >
            <span>Continuar</span>
          </Button>
        </S.ShareLinkContent>
        <GradientLine />
      </S.ShareLinkContainer>
    </S.Container>
  )
}
export default ShareLink

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
