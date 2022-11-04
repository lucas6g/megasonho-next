import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  height: 4.8rem;
  border-radius: 10rem;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s;
  background-color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray};

  &:hover:enabled {
    background-color: ${darken(0.1, '#00A35B')};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.darkBlue};
      border: 1px solid rgba(0, 0, 0, 0.1);
      .lock-disabled {
        display: block;
      }
      .lock-enabled {
        display: none;
      }
    `};

  ${({ disabled }) =>
    !disabled &&
    css`
      .lock-disabled {
        display: none;
      }

      .lock-enabled {
        display: block;
      }
    `};
`
