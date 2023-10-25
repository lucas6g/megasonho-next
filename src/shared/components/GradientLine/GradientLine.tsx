import * as S from './GrandientLineStyles'

interface GradientLineProps {
  className?: string
}

export function GradientLine({ className }: GradientLineProps) {
  return <S.GradientLine className={className} />
}
