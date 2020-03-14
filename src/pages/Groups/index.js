import React, { useState, useEffect } from 'react';

import { Container, LinkPublisher, LinkGroup, CardPaper } from './styles';
import api from '../../services/api';

export default function Groups() {
  const [groups, setGroups] = useState();
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`groups`);

        setGroups(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      {groups &&
        groups.map(group => (
          <CardPaper elevation={10} key={group.id}>
            <LinkGroup to={`/groups/${group.id}/edit`}>
              Grupo {group.number} - {group.leader}
            </LinkGroup>
            {group.publishers.map(publisher => (
              <li key={publisher.id}>
                <LinkPublisher to={`/publishers/${publisher.id}/edit`}>
                  {publisher.name}{' '}
                </LinkPublisher>
              </li>
            ))}
          </CardPaper>
        ))}
    </Container>
  );
}
