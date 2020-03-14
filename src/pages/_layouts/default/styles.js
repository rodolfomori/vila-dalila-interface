import styled from 'styled-components';
import background from '../../../assets/background.svg';

export const Wrapper = styled.div`
  height: 100%;
  /* background: #191920 url(${background}) no-repeat center top; */
  background-color: #e4e5e6;
`;

// export const Menu = styled(AsideMenu)`
//   background-color: #e4e5e6;
//   position: fixed;
// `;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
