import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import styled from 'styled-components'

export const Phone = styled(ReactPhoneInput)`
  margin-bottom: 1.6rem;
  .open {
    width: 100%;
  }

  .phone-input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #c0c5c7;
    width: 100%;
    border-radius: 0;
    padding-left: 3.2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 500;
    font-size: 1.8rem;
  }
  .input-phone-button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #c0c5c7;
    border-radius: 0;
    z-index: auto !important;

    .selected-flag {
      padding: 0;
      width: 3.2rem;
      &:hover {
        background-color: transparent;
      }
      .flag {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
      }
      .arrow {
        display: none;
      }
    }
  }
  .input-phone-dropdown {
    position: unset;
    width: 100%;
  }
`
