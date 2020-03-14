import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Profile,
  Button,
  IconBarOpen,
  Home,
  IconBar,
  IconBack,
  LinkStyle,
  Menu,
  TopMenu,
} from './styles';

import logo from '../../assets/vila-dalila-logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function AsideMenu() {
  const admin = useSelector(state => state.user.profile.admin);
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);
  const [open, setOpen] = useState(true);

  function handleSignOut() {
    setOpen(false);
    dispatch(signOut());
  }

  return (
    <>
      <Menu elevation={10} variant="outlined">
        <TopMenu elevation={10}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </Link>
          </div>{' '}
        </TopMenu>
        <p>ASDUHASUDHASUD</p>
        <p>ASDUHASUDHASUD</p>
        <p>ASDUHASUDHASUD</p>
        <p>ASDUHASUDHASUD</p>
        <p>ASDUHASUDHASUD</p>
      </Menu>
    </>
  );
}
