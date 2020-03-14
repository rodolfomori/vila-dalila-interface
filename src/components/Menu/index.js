import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Container, LinkStyle, TopMenu, IconBack } from './styles';

import logo from '../../assets/vila-dalila-logo.svg';
import { signOut } from '../../store/modules/auth/actions';
import data from './nav';

export default function Menu({ onClicked = () => {} }) {
  const admin = useSelector(state => state.user.profile.admin);
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);

  function handleSignOut() {
    onClicked(false);
    dispatch(signOut());
  }

  return (
    <Container>
      <div className="my-menu-content">
        <TopMenu elevation={10}>
          <>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: '50px' }} />
              </Link>
            </div>
            <IconBack onClick={() => onClicked(false)} />
          </>
        </TopMenu>
        <ul style={{ marginTop: '50px' }}>
          {data.map(configs => (
            <div>
              <li style={{ display: !admin && configs.private && 'none' }}>
                <FontAwesomeIcon
                  style={{ width: '30px' }}
                  icon={configs.icon}
                />
                <LinkStyle to={configs.path} onClick={() => onClicked(false)}>
                  {configs.name}
                </LinkStyle>
              </li>
            </div>
          ))}

          <div>
            <li
              style={{
                position: 'fixed',
                bottom: '20px',
                // backgroudColor: '#F75453',
                fontSize: '30px',
                textDecoration: 'none',
              }}
            >
              <FontAwesomeIcon style={{ width: '30px' }} icon={faDoorOpen} />
              <LinkStyle to="/profile" onClick={handleSignOut}>
                Sair
              </LinkStyle>
            </li>
          </div>

          {/* <div
            style={{
              backgroudColor: '#F75453',
              width: '100%',
              height: '50px',
            }}
          >
            <li
              style={{
                position: 'fixed',
                bottom: '20px',
                // backgroudColor: '#F75453',
                fontSize: '30px',
                textDecoration: 'none',
              }}
            > */}
          {/* <FontAwesomeIcon icon={faDoorOpen} />{' '}
              <LinkStyle to="/profile" onClick={handleSignOut}>
                Sair
              </LinkStyle>
            </li>
          </div> */}
        </ul>
      </div>
      {/* <IconBack onClick={() => setOpen(false)} /> */}
    </Container>
  );
}
