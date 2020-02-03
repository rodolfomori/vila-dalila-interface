import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Home() {
  const { profile } = useSelector(state => state.user);

  return (
    <Container>
      <h1>Bem-Vindo {profile.name}</h1>;
    </Container>
  );
}
