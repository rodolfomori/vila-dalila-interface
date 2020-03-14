import styled from 'styled-components';
import background from '../../../assets/background.svg';
import AsideMenu from '../../../components/Aside Menu';

export const Wrapper = styled.div`
  height: 100%;
  /* background: #191920 url(${background}) no-repeat center top; */
  background-color: #EEE;
`;

export const Menu = styled(AsideMenu)`
  background-color: #eee;
  position: fixed;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
