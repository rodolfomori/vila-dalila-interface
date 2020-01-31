import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const { profile } = useSelector(state => state.user);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/Assistance">Assistência</Link>
        </nav>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Grupos
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/Groups/NewGroups">Grupos</Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <nav>
          <Link to="/Publishers">Publicadores</Link>
        </nav>
        <nav>
          <Link to="/Settings">Configurações</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Logo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
