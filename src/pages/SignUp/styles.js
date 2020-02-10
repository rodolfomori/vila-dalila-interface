import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input, Check } from '@rocketseat/unform';
import Select from 'react-select';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectStyle = styled(Select)`
  color: black;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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
`;

export const InputStyle = styled(Input)`
  background: #2f2f2f;
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 200px;
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
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
