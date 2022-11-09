import { AnchorHTMLAttributes } from 'react'

import * as S from './PlansCardStyles'

interface PlanCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  numbersQuantity: number
  price: string
  pricePernumber: string
  href: string
}

export function PlanCard({
  numbersQuantity,
  price,
  pricePernumber,
  href,
  ...rest
}: PlanCardProps) {
  return (
    <S.Plan href={href} {...rest}>
      <div>
        <div className="img-back"></div>
        <span className="numbers-quantity">{numbersQuantity} Números</span>
      </div>
      <strong className="plan-price">{price}</strong>
      <span className="price-per-number">{pricePernumber} por número</span>
    </S.Plan>
  )
}
