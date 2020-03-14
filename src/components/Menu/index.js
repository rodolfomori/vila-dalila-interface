import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faMapMarkedAlt,
  faUsersCog,
  faBuilding,
  faObjectGroup,
  faCogs,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';

import { Container, LinkStyle, TopMenu } from './styles';

import logo from '../../assets/vila-dalila-logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Menu() {
  const admin = useSelector(state => state.user.profile.admin);
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  function handleSignOut() {
    setOpen(false);
    dispatch(signOut());
  }

  return (
    <Container>
      <div className="my-menu-content">
        <TopMenu elevation={10}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" style={{ width: '50px' }} />
            </Link>
          </div>
        </TopMenu>
        <ul style={{ marginTop: '50px' }}>
          <li>
            <FontAwesomeIcon icon={faHome} />{' '}
            <LinkStyle to="/" onClick={() => setOpen(false)}>
              Home
            </LinkStyle>
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} />{' '}
            <LinkStyle to="/assistance" onClick={() => setOpen(false)}>
              Assistência
            </LinkStyle>
          </li>

          <li>
            <FontAwesomeIcon icon={faMapMarkedAlt} />{' '}
            <LinkStyle to="/territories" onClick={() => setOpen(false)}>
              Territórios
            </LinkStyle>
          </li>
          <li>
            <FontAwesomeIcon icon={faObjectGroup} />{' '}
            <LinkStyle to="/groups" onClick={() => setOpen(false)}>
              Grupos
            </LinkStyle>
          </li>
          {admin && (
            <li>
              <FontAwesomeIcon icon={faCogs} />{' '}
              <LinkStyle to="/settings" onClick={() => setOpen(false)}>
                Configurações
              </LinkStyle>
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUsersCog} />{' '}
            <LinkStyle to="/profile" onClick={() => setOpen(false)}>
              Meu Perfil
            </LinkStyle>
          </li>
          <div
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
            >
              <FontAwesomeIcon icon={faDoorOpen} />{' '}
              <LinkStyle to="/profile" onClick={handleSignOut}>
                Sair
              </LinkStyle>
            </li>
          </div>
        </ul>
      </div>
      {/* <IconBack onClick={() => setOpen(false)} /> */}
    </Container>
  );
}
