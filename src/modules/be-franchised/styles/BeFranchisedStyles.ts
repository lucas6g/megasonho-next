import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.section``
export const Content = styled.div`
  max-width: 120rem;
  padding: 0 1.6rem;
  margin: 0 auto;
  margin-bottom: 56px;
  margin-top: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 6.4rem;
    margin-bottom: 8rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xg}) {
    padding: 0;
  }
`
export const RegisterSteps = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9.6rem;
  }
`
export const SeeHowIsEasyColumn = styled.div`
  h1 {
    font-weight: bold;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: left;
    margin-bottom: 1.6rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: left;
    opacity: 0.9;
    margin-bottom: 2.8rem;

    br {
      display: none;
    }
  }

  button {
    margin-top: 24px;
    margin-bottom: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    h1 {
      font-size: 4rem;
    }
    button {
      max-width: 30.6rem;
    }
    p {
      line-height: 27px;
      font-size: 1.8rem;
      br {
        display: block;
      }
    }
  }
`

export const ContactButton = styled.a`
  border: none;
  width: 100%;
  height: 5.2rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin-top: 24px;
  transition: background 0.4s;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid ${darken(0.2, '#00A35B')};
    background-color: ${darken(0.1, '#00A35B')};
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 212px;
  }
`

export const ImageGalery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    gap: 1.6rem;
    max-width: 45rem;
    margin-left: auto;
  }
`
export const BoxOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .image-galery-1 {
    border-top-left-radius: 16px;
  }
  .image-galery-2 {
    border-bottom-left-radius: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .image-galery-1,
    .image-galery-2 {
      height: 23.1rem;
    }
    gap: 1.6rem;
  }
`
export const BoxTwo = styled.div`
  .image-galery-3 {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .image-galery-3 {
      max-height: 47.8rem;
    }
  }
`
