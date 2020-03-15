import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

export const Card = styled(Paper)`
  width: 50%;
  margin: auto;
  padding: 2px;
  margin-top: 50px;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const Container = styled.div`
  h1 {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
  }
  li {
    margin: 20px;
  }
  text-align: center;
`;

export const LinkMeeting = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #3d4977;
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
