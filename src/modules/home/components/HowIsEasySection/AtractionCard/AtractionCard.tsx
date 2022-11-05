import * as S from './AtractionCardStyles'
import FutureImage from 'next/image'
import { useRouter } from 'next/router'

interface AtractionCardProps {
  name: string
  imgSrc: string
}

export function AtractionCard(props: AtractionCardProps) {
  const router = useRouter()
  return (
    <S.AtractionCard>
      <FutureImage
        className="atraction-img"
        src={props.imgSrc}
        alt="Atração Da Disney"
        width={268}
        height={255}
      />
      <div className="overlay">
        <span className="atraction-name">{props.name}</span>
        <button
          onClick={() => {
            router.push('/register')
          }}
        >
          <span>Quero conhecer</span>
          <FutureImage
            src={'/icons/arrow-right-blue.svg'}
            alt="Trevo"
            width={32}
            height={32}
          />
        </button>
      </div>
    </S.AtractionCard>
  )
}
