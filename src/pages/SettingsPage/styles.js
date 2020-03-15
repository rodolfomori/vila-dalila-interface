import styled, { css } from 'styled-components';
import { darken } from 'polished';

import isMobile from '../../utils/isMobile';

const mobile = isMobile.any();

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction:column;

  h1 {
    color: rgba(0, 0, 0);
    font-weight: bold;
    margin: 30px;
    font-size: 30px;
    text-align: center;
  }

    a {
      text-align: center;
      cursor:pointer;
      font-weight: bold;
      border-radius: 4px;
      text-decoration: none;
      padding: 10px;
      color:white!important;
      background-color: #3d4977;
      font-size: 16px;
      margin:20px;
    }
    a:hover {
      background-color: white;
      color:#3d4977!important;
      font-weight: bold;
      padding: 10px;
      border-radius: 4px;
      text-decoration: none;
    }

.buttons{
  display: flex;
    justify-items: center;
    justify-content: center;
}
  /* ${
    mobile
      ? css`
          grid-template-rows: 20% 80%;
        `
      : css`
          grid-template-columns: 20% 80%;
        `
  } */

  /* a {
    font-size: 20px;
    display: flex;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
