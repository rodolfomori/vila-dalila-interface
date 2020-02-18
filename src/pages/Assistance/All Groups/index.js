import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import { Container, LinkMeeting } from './styles';

export default function AllGroups(props) {
  const [meetingID, setMeetingID] = useState(props.match.params.meeting_id);
  const [groups, setGroups] = useState();

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
          <li key={group.id}>
            <LinkMeeting
              to={`/assistance/meeting/${meetingID}/group/${group.id}`}
            >
              Grupo - {group.number}
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
