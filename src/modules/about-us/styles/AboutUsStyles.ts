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
    margin-bottom: 1.6rem;

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
    span {
      br {
        display: none;
      }
    }
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
export const Atractions = styled.div`
  margin-top: 6.4rem;

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
    margin-top: 14rem;
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
