import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  .hero-back {
    width: 100%;
    object-fit: cover;
    object-position: 25%;
    height: 650px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .hero-back {
      height: 824px;
    }
  }
`
export const Wrapper = styled.div`
  position: absolute;
  top: 2.6rem;
  max-width: 120rem;
  width: 100%;
  padding: 0 1.6rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.6rem;
  .logo {
    width: 17.8rem;
    height: 2.4rem;
  }

  div {
    img {
      width: 2.9rem;
      height: 2.9rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .logo {
      width: 34.5rem;
      height: 5rem;
    }
    div {
      img {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 17.8rem;
  }
`
export const SectionContent = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
  }
`
export const InfoCollun = styled.div`
  margin-bottom: 2.4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
    margin-bottom: 2.4rem;
    position: relative;
    z-index: 2;
  }
  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
  }

  .green-line {
    width: 20rem;
    height: 2rem;
    position: absolute;
    left: 50px;
    top: 49px;
    z-index: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    h2 {
      font-size: 1.7rem;
    }
    .green-line {
      top: 54px;
      left: 90px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: 3.6rem;
      line-height: 3.7rem;
    }

    h2 {
      font-size: 2rem;
    }
    .green-line {
      left: 90px;
      top: 67px;
      width: 38rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
  }
`
export const ItsFreeCTAButton = styled.button`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    margin-top: 3.6rem;
    max-width: 23.3rem;
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    align-items: center;
    border-radius: 10rem;
    height: 4.8rem;
    border: none;
    transition: background 0.5s;
    background-color: ${({ theme }) => theme.colors.gray};

    span {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    .arrow-right-white {
      display: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      border-bottom: 3px solid #007541;
      span {
        color: ${({ theme }) => theme.colors.white};
      }
      .arrow-right-white {
        display: block;
      }
      .arrow-right-green {
        display: none;
      }
    }
  }
`
export const WhatsAppForm = styled.form`
  height: 26.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.6rem;
  border-radius: 1.6rem;

  h3 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: left;
    margin-bottom: 2.4rem;
  }

  button {
    margin-top: 4.8rem;
  }
  @media (min-width: 425px) {
    h3 {
      br {
        display: none;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 31.3rem;
  }
`

export const CertificationContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
    br {
      display: none;
    }

    a {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    p {
      max-width: 32.3rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 12.8rem;
  }
`
