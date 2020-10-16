import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
    }
    .user-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 2rem;
      padding: 2rem;
      input {
        max-width: 100%;
      }
      & div {
        text-align: center;
        display: flex;
      }
      label {
        padding-right: 5px;
      }
      @media (max-width: 900px) {
        flex-direction: column;
        & div {
          flex-direction: column;
        }
      }
    }
  }
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default OrderStyles;
