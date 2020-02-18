import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 20% 80%;

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
  @media (max-width: 600px) {
    margin-top: 140px;
  }
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
