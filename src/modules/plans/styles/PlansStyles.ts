import styled, { keyframes, css } from 'styled-components'

import { pulse } from 'react-animations'
import Link from 'next/link'
const pulseAnimation = keyframes`${pulse}`

export const Container = styled.div`
  height: 100vh;
  @media (min-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ImageBackground = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: relative;
    .back-image {
      width: 100%;
      object-fit: cover;
      height: 100vh;
    }

    div {
      position: absolute;
      top: 2.6rem;
      left: 50%;
      bottom: 0;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
`

export const PlansContainer = styled.div`
  padding: 16px;
  position: relative;
  background-position: 90%;
  background-size: cover;

  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: unset !important;
    height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xg}) {
    padding: 0;
    padding-left: 9.6rem;
  }
`
export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;

  #close-icon {
    height: 3.2rem;
    width: 3.2rem;
  }
  button {
    border: none;
    background: transparent;
  }

  #logo-white {
    max-width: 17.6rem;
    width: 100%;
    height: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const PlansContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 16px;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
    padding: 0;
    padding-top: 4.8rem;
  }
`

export const NumbersPlansBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`

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
// -------------------------------------------------------------------------------------------

export const TimeBoxDesktop = styled.div`
  width: 100%;
  min-width: 352px;
  height: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 212px;
  background-color: #f9f9f9;
  border-bottom: 5px solid #0b5ebf;
  border-radius: 4px;
  box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.15);
`

export const LimitedOfferBoxDesktop = styled.div`
  display: flex;
  align-items: center;
  max-width: 251px;
  gap: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 3.25031px;
  height: 36px;
  padding: 0 6px;
  margin-top: -48px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`
export const TimeLeftMessageBoxDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 20px;
  margin-top: 72px;
  padding-left: 16px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  img {
    height: 20px;
    width: 20px;
  }
`
interface TimerProps {
  isOneMinuteLeft: boolean
}

export const TimerDesktop = styled.div<TimerProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
  .timer {
    font-size: 90px;
    line-height: 81px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }

  .one-minute {
    font-size: 90px;
    line-height: 81px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.red};
  }
`

export const OneMinuteLeftMessageDesktop = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
`
