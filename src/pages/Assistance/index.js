import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';

import { compose } from 'redux';
import { Container, Publisher, Group, CheckPublishers } from './styles';
import api from '../../services/api';

export default function Assistance(props) {
  const [meetingAssistance, setMeetingAssistance] = useState();
  const [loading, setLoading] = useState(false);
  const [meetingID, setMeetingID] = useState(props.match.params.meeting_id);

  const myGroup = useSelector(state => state.user.profile.publisher.group_id);

  async function handleSubmit(data) {
    console.log(data);
    Object.filter = (obj, predicate) =>
      Object.assign(
        ...Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .map(key => ({ [key]: obj[key] }))
      );

    const filtered = Object.filter(data, pub => pub);

    const pubs = Object.keys(filtered).map(pub => Number(pub));

    await api.put(`assistance/${meetingID}`, {
      present_publishers: data,
    });
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(
          `/assistance/meeting/${meetingID}/group/${myGroup}`
        );
        setMeetingAssistance(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [loading, meetingID, myGroup]);

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={meetingAssistance}>
        {meetingAssistance && (
          <li key={meetingAssistance.id}>
            <Group>Grupo {myGroup}</Group>
            {meetingAssistance.map(pub => (
              <li key={pub.publisher.id} className="pubs">
                <CheckPublishers
                  name={pub.publisher.id.toString()}
                  defaultChecked={pub.present}
                  value={pub.publisher.id}
                  type="checkbox"
                  // onChange={e => setPublisher.map( value => value.pub.id = e.target.checked }
                />
                <Publisher>{pub.publisher.name}</Publisher>
              </li>
            ))}
          </li>
        )}
        <button type="submit">Enviar Assistência</button>
      </Form>
    </Container>
  );
}
