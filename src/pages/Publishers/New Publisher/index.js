import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import history from '../../../services/history';

import { Container, FormStyle, InputStyle, CheckStyle } from './styles';
import api from '../../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  group_id: Yup.number().required(),
  elder: Yup.boolean(),
  ministerial_servant: Yup.boolean(),
  pioneer: Yup.boolean(),
  // number: Yup.number('msg').required('msg'),
});

async function handleSubmit(data) {
  console.log(data);

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

export default function NewPublisher() {
  return (
    <Container>
      <h1>Inserir Novo Publicador</h1>

      <FormStyle onSubmit={handleSubmit}>
        <div>
          <InputStyle
            name="name"
            type="text"
            placeholder="Nome do Publicador"
          />
          <InputStyle
            name="group_id"
            type="number"
            placeholder="Grupo do Publicador"
          />
          <div className="checks">
            <CheckStyle name="elder" /> <p>Ancião</p>
          </div>
          <div className="checks">
            <CheckStyle name="ministerial_servant" />
            <p>Servo Ministerial</p>
          </div>
          <div className="checks">
            <CheckStyle name="pioneer" />
            <p>Pioneiro</p>
          </div>
          <div className="checks">
            <CheckStyle name="batized" />
            <p>Batizado</p>
          </div>
          <button type="submit">Adionar Novo Publicador</button>
        </div>
      </FormStyle>
    </Container>
  );
}
