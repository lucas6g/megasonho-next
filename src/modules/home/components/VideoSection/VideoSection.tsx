import { Container } from './VideoSectionStyles'
import FutureImage from 'next/future/image'

export function VideoSection() {
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
          presenteie-se <br /> com esse presente <br /> inesquecível.
        </h2>
      </div>
      <video disablePictureInPicture autoPlay loop muted>
        <source
          src="https://megasonho-public.s3.amazonaws.com/apresentacao-disney.mp4"
          type="video/mp4"
        />
        <source
          src="https://megasonho-public.s3.amazonaws.com/apresentacao-disney.webm"
          type="video/webm"
        />

        <p>Seu navegador não pode reproduzir o arquivo de vídeo fornecido.</p>
      </video>
    </Container>
  )
}
