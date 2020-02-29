import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import history from '../../services/history';

import { Container, Publisher, Group, CheckPublishers } from './styles';
import api from '../../services/api';

export default function Assistance(props) {
  const [meetingAssistance, setMeetingAssistance] = useState();
  const [loading, setLoading] = useState(false);

  const meetingID = props.match.params.meeting_id;

  let myGroup = useSelector(state => state.user.profile.publisher.group_id);

  if (props.match.params.group_id) {
    myGroup = props.match.params.group_id;
  }

  function handleChange(event) {
    const pubs = meetingAssistance;
    pubs.forEach(element => {
      element.id == event.target.name &&
        (element.present = event.target.checked);
    });

    setMeetingAssistance(pubs);
  }
  async function handleSubmit() {
    try {
      const response = await api.put(`assistance/${meetingID}`, {
        assistance: meetingAssistance,
      });
      if (response && response.status === 200) {
        toast.success('Assistência registrada com Sucesso');
        setTimeout(() => {
          history.push('/home');
        }, 3000);
      } else {
        toast.error('Falha ao Registrar Assistência');
      }
    } catch (error) {
      console.error(error);
      toast.error('Falha ao Registrar Assistência');
    }
  }

  function compare(a, b) {
    if (a.publisher.name < b.publisher.name) return -1;
    if (a.publisher.name > b.publisher.name) return 1;
    return 0;
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(
          `/assistance/meeting/${meetingID}/group/${myGroup}`
        );

        setMeetingAssistance(response.data.sort(compare));
      } catch (err) {
        console.error(err);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={meetingAssistance}>
        {meetingAssistance && (
          <li key={meetingAssistance.id}>
            <Group>Grupo {myGroup}</Group>
            {meetingAssistance.map(pub => (
              <li key={pub.id} className="pubs">
                <CheckPublishers
                  name={pub.id.toString()}
                  defaultChecked={pub.present}
                  value={pub.id}
                  type="checkbox"
                  onChange={handleChange}
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
