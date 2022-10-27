import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 3.2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 13.9rem;
    margin-top: 0;
  }
`
export const IsFreeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.6rem;
  max-width: 120rem;
  margin: 0 auto;

  #is-free {
    width: 100%;
    height: 21.9rem;
    margin-bottom: 3.2rem;
    max-width: 538px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15rem;
    #is-free {
      margin-bottom: 3.2rem;
    }
  }
`
export const BoxOne = styled.div`
  align-self: flex-start;
  width: 100%;

  h4 {
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: left;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.colors.darkBlue};

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  button {
    font-size: 1.5rem;
    margin-bottom: 2.4rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    button {
      max-width: 36.3rem;
      span {
        font-size: 1.9rem;
      }
    }
    h4 {
      font-size: 3.2rem;
      line-height: 4.4rem;
      margin-bottom: 3.2rem;
    }
  }
`

export const BePartYouTooBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;

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
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
    p {
      font-size: 1.8rem;
    }
  }
`

export const QuestinsContainer = styled.div`
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h5 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.darkBlue};

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1200px;
    margin: 0 auto;

    h5 {
      font-size: 3rem;
      line-height: 4.4rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h5 {
      br {
        display: none;
      }
    }
  }
`
