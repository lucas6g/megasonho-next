import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  bottom: 40px;
  position: absolute;
  right: 16px;
  margin-left: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 24px;
    bottom: 64px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xg}) {
    right: 160px;
  }
`
export const InfoBox = styled.div`
  padding: 16px;
  min-height: 242px;
  max-width: 263px;

  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.9;
    margin-bottom: 24px;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  button {
    height: 30px;
    span {
      font-size: 14px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 371px;
    min-height: 237px;

    h1 {
      font-size: 22px;
      line-height: 28px;
    }

    p {
      font-size: 16px;
      line-height: 22px;
    }

    button {
      height: 35px;
      span {
        font-size: 18px;
      }
    }
  }
`
