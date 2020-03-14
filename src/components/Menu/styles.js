import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import { FaBars, FaChevronCircleLeft } from 'react-icons/fa';
import CheeseburgerMenu from 'cheeseburger-menu';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Paper } from '@material-ui/core';

export const Container = styled.div`
  height: 100%;
  background: #2f343a;
  /* && {
    background: #3d4977;
    padding: 0 30px;
    height: 78px;
    border: 0 solid #3d4977;
    border-radius: 0;
  } */

  ul {
    li {
      color: white;
    }
  }
`;

export const IconBack = styled(MenuOpenIcon)`
  float: right;
  margin-right: 10px;
  font-size: 30px;
  margin-top: -45px;
  position: fixed;
  top: 60px;
  left: 210px;
  /* color: #3b9eff; */
`;

export const LinkStyle = styled(Link)`
  color: inherit;
  /* margin: 0;
  padding: 0; */
`;

export const TopMenu = styled(Paper)`
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 20px;
    display: flex;
    margin: 0;
    margin-left: 15px;
    margin-top: 6px;
  }
  && {
    background: #3d4977;
    height: 78px;
    border: 0 solid #3d4977;
    border-radius: 0;
    display: flex;
    align-items: center;
  }

  div {
    margin-left: 7px;
    border-radius: 50px;
    background: #eee;
    width: 60px;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
  }
`;
