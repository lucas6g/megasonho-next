import styled from 'styled-components'

export const Container = styled.details`
  &[open] summary img {
    transform: rotate(360deg);
  }
  summary img {
    transform: rotate(180deg);
  }

  border-bottom: 1px solid #e6e6e6;

  & summary::-webkit-details-marker {
    display: none;
  }
`
export const Question = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  list-style-type: none;

  img {
    display: inline-block;
    width: 1.6rem;
    height: 1rem;
    transition: transform 0.26s;
    margin-top: 0.8rem;
  }

  strong {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3rem;
    text-align: left;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.colors.black};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    strong {
      font-size: 2rem;
    }
  }
`
export const Response = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3rem;
    text-align: left;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    p {
      font-size: 1.8rem;
    }
  }
`
