import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';

export default function Publishers() {
  const [publishers, setPublishers] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`publishers`);
        console.log(response);

        setPublishers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Grupos</h1>
      <div>
        {publishers &&
          publishers.map(publisher => (
            <div key={publisher.id}>
              <strong>{publisher.name}</strong>
            </div>
          ))}
      </div>
    </Container>
  );
}
