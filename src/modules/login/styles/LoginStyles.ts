import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  .login-back {
    overflow: hidden;
    width: 100%;
    object-fit: cover;
    height: 100vh;
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

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding-top: 20px;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`
export const LogoMobile = styled.div`
  a {
    img {
      max-width: 176px;
      width: 100%;
      height: 24px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
export const SectionForm = styled.section`
  @media (min-width: 1024px) {
    display: flex;
    margin-top: 108px;
    align-items: flex-start;
    justify-content: space-between;
  }
`
export const LogoDesktop = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-top: 64px;

    a {
      img {
        max-width: 512px;
        width: 100%;
        height: 72px;
      }
    }
  }
`
export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  width: 100%;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.6;
    margin: 8px 0;
  }
  .forgot-password {
    background: transparent;
    border: none;
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 16px;
    align-self: flex-end;
  }

  .forgot-password::after {
    content: '';
    display: block;
    width: 0px;
    height: 2px;
    background: ${({ theme }) => theme.colors.blue};
    transition: width 0.7s;
  }
  .forgot-password:hover::after {
    width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 360px;
  }
`
export const LoginFormTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
`
