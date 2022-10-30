import styled from 'styled-components'

export const Button = styled.button`
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
`
