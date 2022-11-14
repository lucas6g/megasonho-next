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
    margin-bottom: 20px;
  }

  .plan-button-100-shimmer {
    margin-bottom: 16px;
    width: 100%;
    height: 117px;
    border-radius: 4px;
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
    padding: 0;
    padding-top: 4.8rem;
  }

  @media (min-width: 564px) {
    .plan-button-100-shimmer {
      margin-top: 0;
      height: 146px;
    }
  }
`

export const NumbersPlansBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  .plan-card-shimmer {
    border-radius: 4px;
    height: 99px;
  }

  @media (min-width: 768px) {
    .plan-card-shimmer {
      height: 140px;
    }
  }
`

interface Plan100ButtonProps {
  isOneMinuteLeft: boolean
}

export const Plan100Button = styled(Link)<Plan100ButtonProps>`
  background: transparent;
  border: none;
  margin-bottom: 16px;
  margin-top: 24px;

  img {
    width: 100%;
    height: 117px;
  }

  ${props =>
    props.isOneMinuteLeft &&
    css`
      animation: 1s ${pulseAnimation} infinite;
    `}

  @media (min-width: 564px) {
    margin-top: 0;
    img {
      height: 146px;
    }
  }
`
