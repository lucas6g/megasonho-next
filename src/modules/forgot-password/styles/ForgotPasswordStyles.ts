import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  .login-back {
    width: 100%;
    object-fit: cover;
    object-position: 20%;
  }
`
export const Wrapper = styled.div`
  position: absolute;
  top: 2.6rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  max-width: 120rem;
  width: 100%;
  padding: 0 1.6rem;
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 2rem;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-end;
  }
`
export const LogoMobile = styled.div`
  a {
    img {
      max-width: 17.6rem;
      width: 100%;
      height: 2.4rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`
export const SectionForm = styled.section`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    margin-top: 10.8rem;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const LogoDesktop = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;

    a {
      img {
        max-width: 51.2rem;
        width: 100%;
        height: 7.2rem;
      }
    }
  }
`
export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.6rem;
  width: 100%;
  padding: 4rem 1.6rem;
  display: flex;
  flex-direction: column;
  .gap {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: left;
    margin-bottom: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 36rem;

    p {
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 28px;
    }
  }
`
export const LoginFormTitle = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 8px;
`
