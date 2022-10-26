import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.section``
export const Content = styled.div`
  max-width: 112rem;
  padding: 0 1.6rem;
  margin: 0 auto;
  margin-top: 3.2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 6.4rem;
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
  h3 {
    font-weight: bold;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: left;
    margin-bottom: 1.6rem;
  }

  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: left;
    margin-bottom: 3.2rem;
  }
  button {
    margin-bottom: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    h3 {
      font-size: 3.2rem;
    }
    button {
      max-width: 30.6rem;
    }
  }
`
export const StepsBox = styled.div`
  display: flex;
  gap: 1.6rem;
`
export const StepsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.7rem;
  margin-bottom: 3.2rem;

  span {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: left;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 4.8rem;
  }
`
export const CTAButton = styled.button`
  border: none;
  width: 100%;
  height: 5.6rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  transition: background 0.4s;
  &:hover {
    border-bottom: 3px solid ${darken(0.2, '#00A35B')};
    background-color: ${darken(0.1, '#00A35B')};
  }
`
export const BePartYouTooBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: left;
    margin-bottom: 0;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media (min-width: 425px) {
    br {
      display: none;
    }
  }
`
export const ImageGalery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 3.2rem;

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
export const Atractions = styled.div`
  margin-top: 3.2rem;

  h3 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: left;
    margin-bottom: 1.6rem;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 6.4rem;
    h3 {
      margin-bottom: 3.2rem;
    }
  }
`
export const AtractionsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const AtractionCard = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    border-radius: 4px;
    transition: all 0.5s;
    overflow: hidden;
    .atraction-name {
      opacity: 0;
      transition: all 0.5s;
      font-weight: 500;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.white};
    }

    button {
      position: absolute;
      transition: all 0.5s;
      bottom: -50px;
      left: 1.6rem;
      right: 1.6rem;
      border: none;
      height: 4.8rem;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.colors.gray};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      transition: all 0.4s;
      span {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.darkBlue};
      }
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      .atraction-name {
        font-size: 2rem;
      }
    }
  }
  &:hover {
    .overlay {
      background-color: rgba(0, 0, 0, 0.6);
      .atraction-name {
        opacity: 1;
      }
    }
    button {
      bottom: 16px;
    }
  }

  .atraction-img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 4px;
  }
`
