import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';

import { compose } from 'redux';
import { Container, Publisher, Group, CheckPublishers } from './styles';
import api from '../../services/api';

export default function Assistance() {
  const [group, setGroup] = useState();
  const [loading, SetLoading] = useState(false);

  const myGroup = useSelector(state => state.user.profile.publisher.group_id);

  async function handleSubmit(data) {
    Object.filter = (obj, predicate) =>
      Object.assign(
        ...Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .map(key => ({ [key]: obj[key] }))
      );

    const filtered = Object.filter(data, pub => pub);

    const pubs = Object.keys(filtered).map(pub => Number(pub));

    await api.put(`assistance/1`, {
      present_publishers: pubs,
    });
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`groups/${myGroup}`);

        setGroup(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [myGroup]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {group && (
          <li key={group.id}>
            <Group to={`/groups/${group.id}/edit`}>
              Grupo {group.number} - {group.leader}
            </Group>
            {group.publishers.map(publisher => (
              <li key={publisher.id} className="pubs">
                <CheckPublishers name={publisher.id.toString()} />
                <Publisher to={`/publishers/${publisher.id}/edit`}>
                  {publisher.name}
                </Publisher>
              </li>
            ))}
          </li>
        )}
        <button type="submit">Enviar Assistência</button>
      </Form>
    </Container>
  );
}
