import styled, { css } from 'styled-components';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  display: grid;
  ${props =>
    props.mobile
      ? css`
          grid-template-rows: 45% 55%;
          height: 70%;
          width: 85%;
        `
      : css`
          grid-template-columns: 35% 65%;
          height: 50%;
          width: 60%;
          max-height: 500px !important;
        `}
`;

export const CenterCard = styled(Card)`
  display: flex;
  justify-content: center;
  /* display: flex;
  justify-items: center;
  align-items: center;
  height: 70%;
  width: 25%; */
  /* margin-top: (100% + 300px) */
`;

export const InputField = styled(TextValidator)`
  width: 70%;
`;

export const SubmitButton = styled(Button)`
  background: #7467ef;
  width: 70%;
`;

export const Form = styled(ValidatorForm)``;
