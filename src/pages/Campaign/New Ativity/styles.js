import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input, Check } from '@rocketseat/unform';
import Select from 'react-select';
import { Paper, TextField } from '@material-ui/core';

export const Date = styled(TextField)``;

export const SelectStyle = styled(Select)`
  color: black;
  cursor: pointer !important;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 10px;
  max-width: 90%;
`;

export const InputStyle = styled(Input)`
  @media (max-width: 600px) {
    width: 90%;
  }
  width: 80%;
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

export const Container = styled(Paper)`

  margin:auto;

  margin-top:30px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 60%;
  max-width: 450px;
  min-width: 270px;

  @media(min-width:600px){
    align-content:center;
    align-items: center;
  }

   @media (max-width: 600px) {
    width: 95%;
  }

  h1 {
    /* color: rgba(0, 0, 0);
    margin: 16px;
    font-size: 30px;
    text-align: center;
    margin-top:5px; */
    font-family: Roboto,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .1px;
    line-height: 24px;
    color: #202124;
    font-weight: 400;
    width: 100%;
    word-break: break-word;
  }
  p{
    font-size: 13px;
    font-weight: 400;
    letter-spacing: .3px;
    line-height: 16px;
    color: #202124;
    line-height: 135%;
    margin-top: 4px;
    width: 100%;
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

  /* div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  } */

  .checks{
    display: flex;
    flex-direction: row;
    align-items: center;

    p{
      font-size:20px;
      color: color: rgba(0, 0, 0);
      margin:0;
      margin-left:20px;
    }
  }
`;
export const CheckWraper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const CheckAdmin = styled(Check)`
  font-size: 30px;
  margin: 35px;
`;
