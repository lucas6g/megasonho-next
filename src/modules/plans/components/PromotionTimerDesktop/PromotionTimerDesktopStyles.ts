import styled, { css } from 'styled-components'

export const TimeBoxDesktop = styled.div`
  width: 100%;
  min-width: 352px;
  height: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 212px;
  background-color: #f9f9f9;
  border-bottom: 5px solid #0b5ebf;
  border-radius: 4px;
  box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.15);
`

export const LimitedOfferBoxDesktop = styled.div`
  display: flex;
  align-items: center;
  max-width: 251px;
  gap: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 3.25031px;
  height: 36px;
  padding: 0 6px;
  margin-top: -48px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`
interface TimeLeftMessageBoxProps {
  isOneMinuteLeft: boolean
}

export const TimeLeftMessageBoxDesktop = styled.div<TimeLeftMessageBoxProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 20px;
  margin-top: 72px;
  padding-left: 16px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.darkBlue};
    ${props =>
      props.isOneMinuteLeft &&
      css`
        color: ${({ theme }) => theme.colors.red};
      `};
  }

  img {
    height: 20px;
    width: 20px;
  }
`
interface TimerProps {
  isOneMinuteLeft: boolean
}

export const TimerDesktop = styled.div<TimerProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
  .timer {
    font-size: 90px;
    line-height: 81px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }

  .one-minute {
    font-size: 90px;
    line-height: 81px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.red};
  }
`

export const OneMinuteLeftMessageDesktop = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
`
