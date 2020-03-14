import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';

import { Container, LinkMeeting, Card } from './styles';

export default function Home() {
  const [meetings, setMeetings] = useState();
  const { profile } = useSelector(state => state.user);

  const myGroup = useSelector(state => state.user.profile.publisher.group_id);
  // const myGroup = useSelector(state => console.log(state));

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`meetings`);

        if (response.data.length > 2) {
          response.data = response.data.slice(-2);
        }

        const dateFormatted = response.data.map(data => {
          const newDate = { ...data };
          newDate.date = format(parseISO(data.date), "EEEE dd 'de' MMMM'", {
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
  }, []);

  return (
    <Container>
      <h1>Bem-Vindo {profile.name}</h1>
      <Card>
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
      </Card>
    </Container>
  );
}
