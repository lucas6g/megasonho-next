import styled, { keyframes, css } from 'styled-components'
import { pulse } from 'react-animations'
import Link from 'next/link'
const pulseAnimation = keyframes`${pulse}`
export const TimeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  background-color: #f9f9f9;
  border-bottom: 4.06288px solid #0b5ebf;
  border-radius: 6px;
  box-shadow: 0px 9px -25px rgba(0, 0, 0, 0.15);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const LimitedOfferBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 191px;
  gap: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 3.25031px;
  height: 28px;
  padding: 0 6px;
  margin-top: -16px;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`
export const TimeLeftMessageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`

interface TimerProps {
  isOneMinuteLeft: boolean
}

export const Timer = styled.div<TimerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .timer {
    font-size: 70px;
    line-height: 81px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }

  .one-minute {
    font-size: 70px;
    line-height: 100px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.red};
  }

  ${props =>
    props.isOneMinuteLeft &&
    css`
      animation: 1s ${pulseAnimation} infinite;
    `}
`

export const OneMinuteLeftMessage = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
`

interface Plan100ButtonProps {
  isOneMinuteLeft: boolean
}

export const Plan100Button = styled(Link)<Plan100ButtonProps>`
  width: 100%;
  background: transparent;
  border: none;
  margin-bottom: 16px;

  img {
    width: 100%;
  }

  ${props =>
    props.isOneMinuteLeft &&
    css`
      animation: 1s ${pulseAnimation} infinite;
    `}
`
