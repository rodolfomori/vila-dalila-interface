import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h1 {
    color: white;
    font-weight: bold;
    margin: 30px;
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
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const InputStyle = styled(Input)`
  background: #2f2f2f;
  width: 400px;
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
