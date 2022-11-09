import styled from 'styled-components'
import Link from 'next/link'
export const Plan = styled(Link)`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 8px;
  background: #f4f4f4;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 99px;
  flex-direction: column;
  display: flex;
  align-items: center;
  cursor: pointer;
  align-items: flex-start;
  text-decoration: none;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    .numbers-quantity {
      font-weight: 700;
      font-size: 12px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .plan-price {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 4px;
  }
  .price-per-number {
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.7;
  }

  transition: background-color 0.5s;
  .img-back {
    height: 24px;
    width: 24px;
    background-image: url(${'/icons/blue-clover.svg'});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.15);
    border: none;
    border-bottom: 4px solid #0f8427;
    .img-back {
      background-image: url('/icons/white-clover.svg');
    }

    .price-per-number {
      color: ${({ theme }) => theme.colors.white};
    }
    .plan-price {
      color: ${({ theme }) => theme.colors.white};
    }

    div {
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    div {
      .numbers-quantity {
        font-size: 12px;
      }
    }

    .plan-price {
      font-size: 24px;
    }
    .price-per-number {
      font-size: 10px;
    }
  }

  @media (min-width: 768px) {
    height: 140px;

    div {
      gap: 8px;
      padding-bottom: 20px;
      .numbers-quantity {
        font-size: 16px;
      }
    }
    .img-back {
      background-size: 24px 24px;
    }
    .plan-price {
      font-size: 36px;
    }
    .price-per-number {
      font-size: 14px;
    }
  }
`
