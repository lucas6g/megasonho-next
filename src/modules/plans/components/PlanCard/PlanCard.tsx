import { ButtonHTMLAttributes } from 'react'

import * as S from './PlansCardStyles'

interface PlanCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  numbersQuantity: number
  price: string
  pricePernumber: string
}

export function PlanCard({
  numbersQuantity,
  price,
  pricePernumber,
  ...rest
}: PlanCardProps) {
  return (
    <S.Plan {...rest}>
      <div>
        <div className="img-back"></div>
        <span className="numbers-quantity">{numbersQuantity} Números</span>
      </div>
      <strong className="plan-price">{price}</strong>
      <span className="price-per-number">{pricePernumber} por número</span>
    </S.Plan>
  )
}
