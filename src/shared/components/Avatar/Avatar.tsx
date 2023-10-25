import {
  ChangeEvent,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState
} from 'react'
import { Container, Label, BlourEfect } from './AvatarStyle'
import { MdCameraAlt } from 'react-icons/md'
import Image from 'next/image'
import { AuthContext } from '@/shared/context/AuthContext'

type AvatarProps = InputHTMLAttributes<HTMLInputElement> & {
  imgUrl: string
  error?: boolean
  errorMessage?: string
  handleSelectImage?: (event: ChangeEvent<HTMLInputElement>) => void
  allowEdit: boolean
}

export function Avatar({
  imgUrl,
  error,
  errorMessage,
  name,
  allowEdit = false,
  handleSelectImage,
  id,
  className,
  ...rest
}: AvatarProps) {
  const { user } = useContext(AuthContext)
  const [render, setRender] = useState(false)

  useEffect(() => {
    if (imgUrl.length > 0 || user?.avatar_url) {
      setRender(true)
    }
  }, [imgUrl, user?.avatar_url])

  return (
    <Container>
      <Label
        className={className}
        allowEdit={allowEdit}
        error={error}
        htmlFor={id}
      >
        {render ? (
          <Image
            src={imgUrl || (user?.avatar_url as string)}
            width={80}
            height={80}
            alt={'User Avatar'}
          />
        ) : (
          !allowEdit && <strong>{user?.name[0].toUpperCase()}</strong>
        )}
        {allowEdit && (
          <BlourEfect>
            <MdCameraAlt size={32} />
          </BlourEfect>
        )}
      </Label>

      <input
        accept=".png, .jpg, .jpeg, .webp, .svg"
        type="file"
        id={id}
        onChange={handleSelectImage}
        {...rest}
      />
    </Container>
  )
}
