import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewGroup from '../Groups/New Group';
import NewPublisher from '../Publishers/New Publisher';
import SignUp from '../SignUp';

import isMobile from '../../utils/isMobile';

import { Container, Wrapper } from './styles';

export default function SettingsPage() {
  const [group, setGroup] = useState(false);
  const [publisher, setPublisher] = useState(false);
  const [user, setUser] = useState(false);

  function handlePage(page) {
    switch (page) {
      case 'group':
        setGroup(true);
        setPublisher(false);
        setUser(false);
        break;

      case 'user':
        setGroup(false);
        setPublisher(false);
        setUser(true);
        break;

      case 'publisher':
        setGroup(false);
        setPublisher(true);
        setUser(false);
        break;

      default:
        break;
    }
  }
  return (
    <Container>
      <aside>
        <h1>Settings page</h1>
        <a onClick={() => handlePage('group')}>Groups</a>
        <a onClick={() => handlePage('user')}>User</a>
        <a onClick={() => handlePage('publisher')}>Publisher</a>
      </aside>
      <Wrapper>
        {group && <NewGroup />}
        {user && <SignUp />}
        {publisher && <NewPublisher />}
      </Wrapper>
    </Container>
  );
}
