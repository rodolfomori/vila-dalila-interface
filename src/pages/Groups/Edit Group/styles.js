import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input, Check } from '@rocketseat/unform';
import { Paper } from '@material-ui/core';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 90%;
  max-width: 400px;
  min-width: 230px;
`;

export const Container = styled(Paper)`
  @media (max-width: 600px) {
    width: 95%;
  }
  margin: auto;

  margin-top: 30px;
  display: flex;
  flex-direction: column;

  width: 60%;
  max-width: 450px;
  min-width: 270px;

  @media (min-width: 600px) {
    align-content: center;
    align-items: center;
  }

  h1 {
    color: rgba(0, 0, 0);
    font-weight: bold;
    margin: 30px;
    font-size: 30px;
    text-align: center;
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    text-align: center;
    margin: 0 0 10px;
    font-weight: bold;
  }
  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .checks {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 20px;
      color: rgba(0, 0, 0);
      margin: 0;
      margin-left: 20px;
    }
  }
`;

export const InputStyle = styled(Input)`
  @media (max-width: 600px) {
    max-width: 100%;
  }
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: rgba(0, 0, 0);
  margin: 0 0 10px;
  &::placeholder {
    color: #999;
  }
`;

export const CheckStyle = styled(Check)`
  font-size: 100px;
`;
