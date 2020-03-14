import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import { FaBars, FaChevronCircleLeft } from 'react-icons/fa';
import CheeseburgerMenu from 'cheeseburger-menu';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Paper } from '@material-ui/core';

export const Container = styled(Paper)`
  /* background: #fff; */
  display: flex;
  align-items: center;
  && {
    background: #3d4977;
    padding: 0 30px;
    height: 78px;
    border: 0 solid #3d4977;
    border-radius: 0;

    @media (max-width: 600px) {
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
`;

export const AsideMenu = styled(CheeseburgerMenu)`
  display: grid;
  grid-template-columns: 80% 20%;
  li {
    font-size: 20px;
    color: black;
    margin: 20px;
    /* font-weight: bold; */
  }
`;

export const IconBar = styled(MenuIcon)`
  color: white;
  cursor: pointer;
  @media (min-width: 600px) {
    && {
      font-size: 37px;
    }
  }
`;

export const IconBarOpen = styled(MenuOpenIcon)`
  color: white;
  cursor: pointer;
  @media (min-width: 600px) {
    && {
      font-size: 37px;
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

export const Content = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  height: 78px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      /* color: #7159c1; */
      color: white;
      padding: 10px;
      font-size: 16px;
    }
    a:hover {
      background-color: white;
      font-weight: bold;
      color: #3d4977;
      padding: 10px;
      border-radius: 4px;
      text-decoration: none;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #eeeeee;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Home = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-right: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const DropdownButton = styled(Dropdown)`
  .dropdown {
    background-color: white;
    font-weight: bold;
    color: #7159c1;
    border: none;
    &:hover {
      outline: none;
      background-color: #7159c1;
      font-weight: bold;
      color: white;
      border: none;
    }
  }
  /* .dropdown-item {
    outline: none;
    background-color: #7159c1;
    font-weight: bold;
    color: white;
    border: none;
  } */
  .btn-primary.focus,
  .btn-primary:focus {
    background-color: #7159c1;
    font-weight: bold;
    color: white;
  }
  .dropdown-toggle::after {
    outline: none;
    display: none;
  }
`;

export const LinkStyle = styled(Link)`
  color: inherit;
`;

export const TopMenu = styled.div`
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
`;
