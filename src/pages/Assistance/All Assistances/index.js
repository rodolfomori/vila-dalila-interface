import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../../services/api';

import { Container, LinkMeeting } from './styles';

export default function AllAssistances() {
  const [meetings, setMeetings] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`meetings`);

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
      {meetings &&
        meetings.map(meeting => (
          <li key={meeting.id}>
            <LinkMeeting to={`allgroups/${meeting.id}`}>
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
