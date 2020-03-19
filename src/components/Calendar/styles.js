import styled from 'styled-components';
import { Calendar } from 'primereact/calendar';

export const CalendarStyle = styled(Calendar)`
  th {
    span {
      color: #3b9eff;
    }
  }
  input {
    width: 100%;
    border: 1.4px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 44px;
    &:hover {
      border: 1.4px solid rgba(0, 0, 0, 0.1) !important;
    }
  }

  span {
    margin: 0;
    padding: 0;
    color: black;
    height: 44px;
  }

  button {
    margin: 0;
    padding: 0;
    width: 20%;
    max-width: 70px;
    min-width: 50px;
  }
  .pi-calendar:before {
    color: white;
    font-size: 40px;
    font-weight: 100;
    position: relative;
    bottom: 8px;
    right: 9px;
  }

  .pi-chevron-right:before {
    color: white;
  }
  .pi-chevron-left:before {
    color: white;
  }

  .p-datepicker-buttonbar {
    display: flex;
    flex: 1;
    justify-content: center;
    justify-items: center;
    span {
      background-color: #3b9eff;
      color: white;
      border-radius: 5px;
      font-size: 19px;
    }
  }

  .p-button.p-component.p-button-secondary.p-button-text-only {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .p-button.p-component.p-button-secondary.p-button-text-only:last-child {
    display: none;
  }
`;
