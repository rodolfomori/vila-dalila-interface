import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CheeseburgerMenu from 'cheeseburger-menu';
import {
  Container,
  Content,
  Profile,
  Button,
  DropdownButton,
  Home,
} from './styles';

import logo from '../../assets/vila-dalila-logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const { profile } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <CheeseburgerMenu isOpen={open} closeCallback={() => setOpen(false)}>
        <div className="my-menu-content">
          <ul>
            <li>
              <Link to="/groups" onClick={() => setOpen(false)}>
                Grupos
              </Link>
            </li>
            <li>
              <Link to="/publishers" onClick={() => setOpen(false)}>
                Publicadores
              </Link>
            </li>
          </ul>
        </div>
      </CheeseburgerMenu>
      <Button onClick={() => setOpen(!open)}>Fechar</Button>

      <Content>
        <aside>
          <Home>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: '50px' }} />
              </Link>
            </div>
          </Home>
        </aside>
        <nav>
          <Link to="/Assistance">Assistência</Link>
        </nav>
        <DropdownButton className="dropdown">
          <DropdownButton.Toggle id="dropdown-basic" className="dropdown">
            Grupos
          </DropdownButton.Toggle>

          <DropdownButton.Menu>
            <DropdownButton.Item>
              <Link to="/Groups">Grupos</Link>
            </DropdownButton.Item>
            <DropdownButton.Item>
              <Link to="/groups/new-group">Novo Grupo</Link>
            </DropdownButton.Item>
          </DropdownButton.Menu>
        </DropdownButton>
        <nav>
          <Link to="/publishers/new">Publicadores</Link>
        </nav>
        <nav>
          <Link to="/territories">Territórios</Link>
        </nav>
        <nav>
          <Link to="/settings">Configurações</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Olá {profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
              <Link to="/" onClick={handleSignOut}>
                Sair
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
