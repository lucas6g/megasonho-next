import useCopy from 'use-copy'
import * as S from './CopyInputStyles'
import Image from 'next/image'
interface CopyInputProps {
  value: string
  className?: string
}

export function CopyInput({ value, className }: CopyInputProps) {
  const [copied, copy, setCopied] = useCopy(value)
  function handleCopyToClipBoard() {
    copy()

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <S.LinkBox className={className}>
      <input readOnly type="text" value={value} />

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
  )
}
