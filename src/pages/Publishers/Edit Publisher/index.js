import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import history from '../../../services/history';

import { Container, FormStyle, InputStyle, CheckStyle } from './styles';
import api from '../../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  group_id: Yup.number().required(),
  elder: Yup.boolean(),
  ministerial_servant: Yup.boolean(),
  pioneer: Yup.boolean(),
  baptized: Yup.boolean(),
  // number: Yup.number('msg').required('msg'),
});

export default function EditPublisher(props) {
  const [admin, setAdmin] = useState(false);
  const [publisher, setPublisher] = useState();

  const adm = useSelector(state => state.user.profile.admin);

  useEffect(() => {
    async function getData() {
      const { id } = props.match.params;

      try {
        const response = await api.get(`publishers/${id}`);
        setPublisher(response.data);
        (await adm) && setAdmin(adm);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [adm, props.match.params]);

  async function handleSubmit(data) {
    try {
      const response = await api.post('publishers', data);
      if (response && response.status === 200) {
        toast.success('Grupo Cadastrado com Sucesso');
        setTimeout(() => {
          history.push('/home');
        }, 3000);
      } else {
        toast.error('Falha ao Criar o Grupo');
      }
    } catch (error) {
      toast.error('Falha ao Criar o Grupo');
    }
  }

  return (
    <Container>
      <h1>Editar Publicador</h1>

      <FormStyle
        schema={schema}
        initialData={publisher}
        onSubmit={handleSubmit}
      >
        <div>
          <InputStyle
            name="name"
            type="text"
            placeholder="Nome do Publicador"
            disabled={!admin}
          />
          <InputStyle
            name="group_id"
            type="number"
            placeholder="Grupo do Publicador"
            disabled={!admin}
          />
          <div className="checks">
            <CheckStyle disabled={!admin} name="elder" /> <p>Ancião</p>
          </div>
          <div className="checks">
            <CheckStyle disabled={!admin} name="ministerial_servant" />
            <p>Servo Ministerial</p>
          </div>
          <div className="checks">
            <CheckStyle disabled={!admin} name="pioneer" />
            <p>Pioneiro</p>
          </div>
          <div className="checks">
            <CheckStyle disabled={!admin} name="baptized" />
            <p>Batizado</p>
          </div>
          {admin && <button type="submit">Editar Publicador</button>}
        </div>
      </FormStyle>
    </Container>
  );
}
