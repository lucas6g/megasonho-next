import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 2rem 0;
  border-bottom: 1px solid #494949;
  max-width: 120rem;
  margin: 0 1.6rem;
  width: 100%;

  .button-mobile {
    margin-top: 2.4rem;
    img {
      height: 3.2rem;
      width: 3.2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .button-mobile {
      display: none;
    }
  }
`
export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  div {
    .button-desktop {
      display: none;
    }
  }
  .logo {
    img {
      width: 16.1rem;
      height: 2.4rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .logo {
      img {
        width: 227px;
        height: 32px;
      }
    }

    div {
      .button-desktop {
        display: block;

        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.6rem;
        gap: 0.8rem;
        span {
          white-space: nowrap;
        }
      }
    }
    div {
      a {
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: unset;
    flex-direction: row;
  }
`
export const LinksBlockTitle = styled.strong`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`
export const CertificationTitle = styled.strong`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`
export const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: auto;
    margin-top: 0;
  }
`
export const CertificateBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 69.1rem;
    align-items: center;
    display: flex;
    gap: 4.6rem;
  }
`
export const CertificateContent = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;

  img {
    margin-bottom: 1.6rem;
    width: 13.2rem;
    height: 13.2rem;
  }
  div {
    p {
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
      margin-top: 1.2rem;
      font-weight: 300;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 2.4rem 0;
    div {
      p {
        margin-top: 8px;
        text-align: left;
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1220px) {
    padding: 0 1.6rem;
  }
`

export const FooterBottom = styled.div`
  padding: 1.6rem;
`
export const FooterBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.6rem;
    span {
      font-size: 1.4rem;
      line-height: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
    }
    strong {
      font-size: 1.4rem;
      line-height: 2.5rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 2.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: left;

    strong {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    p {
      max-width: 69.1rem;
    }
  }
`
export const VirifiedBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.8rem;
  margin-bottom: 2rem;

  img {
    width: 22px;
    height: 22px;
    margin: 0;
  }

  a {
    font-weight: 500;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.colors.white};
  }
`
