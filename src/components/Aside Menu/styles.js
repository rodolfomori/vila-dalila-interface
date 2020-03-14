import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Paper } from '@material-ui/core';

export const Container = styled.div``;

export const Menu = styled(Paper)`
  /* background: #fff; */
  && {
    background: #4c5782;
    height: 78px;
    border: 0 solid #4c5782;
    border-radius: 0;
    background: white;
    color: #3d4977;
    width: 100%;
    height: 100%;
  }
`;

export const TopMenu = styled(Paper)`
  && {
    background: #4c5782;
    height: 78px;
    border: 0 solid #4c5782;
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

export const IconBar = styled(MenuIcon)`
  color: white;
  @media (min-width: 600px) {
    display: none !important;
  }
  font-size: 24px;
`;

export const IconBarOpen = styled(MenuOpenIcon)`
  color: white;
  @media (min-width: 600px) {
    display: none !important;
  }
  font-size: 24px;
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
