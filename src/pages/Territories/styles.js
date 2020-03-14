import styled, { css } from 'styled-components';
import { Paper } from '@material-ui/core';

export const Container = styled(Paper)`
  margin: auto;

  margin-top: 30px;
  display: flex;
  flex-direction: column;

  width: 95%;

  display: grid;
  ${props =>
    props.mobile
      ? css`
          grid-template-columns: repeat(2, 1fr);
        `
      : css`
          grid-template-columns: repeat(4, 1fr);
        `}
  grid-gap: 20px;
  justify-items: center;
  img {
    width: 100%;
  }
`;

export const Text = styled.div`
  color: rgba(0, 0, 0);
  font-weight: bold;
  margin: 30px;
  font-size: 30px;
  text-align: center;
`;
