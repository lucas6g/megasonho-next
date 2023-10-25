import styled from 'styled-components'

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray};

  border: 2px solid rgba(46, 61, 69, 0.2);
  border-radius: 4px;
  padding-left: 16px;

  input {
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.gray};
    border: none;
  }

  span {
    color: ${({ theme }) => theme.colors.blue};
    justify-self: center;
  }
`

export const CopyButton = styled.button`
  height: 100%;
  max-width: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: unset;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
