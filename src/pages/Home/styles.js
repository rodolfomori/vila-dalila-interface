import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  h1 {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
  }
  li {
    margin-top: 30px;
  }
  text-align: center;
`;

export const LinkMeeting = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  text-align: center;

  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    font-size: 30px;
    transition: 0.5s;
  }
`;
