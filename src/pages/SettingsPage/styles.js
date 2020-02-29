import styled, { css } from 'styled-components';
import { darken } from 'polished';

import isMobile from '../../utils/isMobile';

const mobile = isMobile.any();

export const Container = styled.div`
  color: white;
  display: grid;

  ${mobile
    ? css`
        grid-template-rows: 20% 80%;
      `
    : css`
        grid-template-columns: 20% 80%;
      `}

  a {
    font-size: 20px;
    display: flex;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
