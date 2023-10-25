import styled from 'styled-components'

interface TimerProps {
  isOneMinuteLeft: boolean
}

export const Timer = styled.div<TimerProps>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 52px;

  .timer {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  .one-minute {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 615px) {
    width: unset;
    flex-direction: row;
    gap: 19px;

    img {
      width: 43px;
      height: 43px;
    }
    .timer {
      font-size: 40px;
    }

    .one-minute {
      font-size: 40px;
    }
  }
`

export const OneMinuteLeftMessage = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
`
