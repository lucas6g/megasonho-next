import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PaymentConfirmationContainer = styled.div`
  padding: 16px;
  position: relative;
  background-position: 60%;
  background-size: cover;
  height: 100%;
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

export const PaymentConfirmationContent = styled.div`
  header:first-child {
    margin-bottom: 24px;
  }

  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .whats-button {
    margin-top: 72px;
    min-height: 46px;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 16px;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
    padding: 0;
    height: 100%;
    padding-top: 4.8rem;
    .whats-button {
      margin-bottom: 46px;
      margin-top: auto;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    p {
      font-size: 18px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`

export const WhatsContinueButton = styled.a`
  height: 48px;
  border-radius: 100px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.5s ease;
  text-decoration: none;

  img {
    width: 26px;
    height: 26px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
  background-color: ${({ theme }) => theme.colors.green};
  margin-top: 32px;
  text-decoration: none;

  &:hover {
    background-color: ${darken(0.1, '#00A35B')};
  }
`

export const TextIconBox = styled.div`
  display: flex;

  gap: 8px;
  margin-bottom: 20px;

  span {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};

    opacity: 0.8;
  }
`
