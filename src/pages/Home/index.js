import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';

import { Container, LinkMeeting } from './styles';

export default function Home() {
  const [meetings, setMeetings] = useState();
  const { profile } = useSelector(state => state.user);
  const myGroup = useSelector(state => state.user.profile.publisher.group_id);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`meetings`);

        // console.log(response.data);

        const dateFormatted = response.data.map(data => {
          const newDate = { ...data };
          newDate.date = format(parseISO(data.date), "'Dia' dd 'de' MMMM'", {
            locale: pt,
          });
          return newDate;
        });

        setMeetings(dateFormatted);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>Bem-Vindo {profile.name}</h1>;
      {meetings &&
        meetings.map(meeting => (
          <li key={meeting.id}>
            <LinkMeeting
              to={`/assistance/meeting/${meeting.id}/group/${myGroup}`}
            >
              {meeting.date}
            </LinkMeeting>
            {/* {group.publishers.map(publisher => (
              <li key={publisher.id}>
                <LinkPublisher to={`/publishers/${publisher.id}/edit`}>
                  {publisher.name}{' '}
                </LinkPublisher>
              </li>
            ))} */}
          </li>
        ))}
    </Container>
  );
}
