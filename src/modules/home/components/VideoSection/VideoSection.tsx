import { Container } from './VideoSectionStyles'
import FutureImage from 'next/image'
import { useEffect, useRef } from 'react'

export default function VideoSection() {
  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase()
    return ua.includes('safari') && !ua.includes('chrome')
  }
  const videoParentRef = useRef()

  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0]

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false
        player.playsinline = true
        player.muted = true
        player.loop = true
        player.setAttribute('muted', '') // leave no stones unturned :)
        player.autoplay = true

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play()
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none'
              })
          }
        }, 0)
      }
    }
  }, [])
  return (
    <Container>
      <div>
        <FutureImage
          className="white-clover"
          src="/icons/white-clover.svg"
          alt="Trevo Branco"
          height={160}
          width={160}
        />
        <h2>
          Viva momentos mágicos e <br /> se sinta criança <br /> novamente,
          presentei-se com essa viagem inesquecível.
        </h2>
      </div>
      <section
        className="video"
        ref={videoParentRef}
        dangerouslySetInnerHTML={{
          __html: `
          <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
          disablePictureInPicture
             >
          <source
            src="https://megasonho-public.s3.amazonaws.com/apresentacao-disney.mp4"
            type="video/mp4"
          />
          <source
            src="https://megasonho-public.s3.amazonaws.com/apresentacao-disney.webm"
            type="video/webm"
          />

          <p>
            Seu navegador não pode reproduzir o arquivo de vídeo fornecido.
          </p>
        </video>`
        }}
      />
    </Container>
  )
}
