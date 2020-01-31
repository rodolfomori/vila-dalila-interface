import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container, FormStyle, InputStyle, CheckStyle } from './styles';
import api from '../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  group_id: Yup.number().required(),
  elder: Yup.boolean(),
  ministerial_servant: Yup.boolean(),
  pioneer: Yup.boolean(),
});

async function handleSubmit(data) {
  try {
    console.log(data);
    const response = await api.post('publishers', data);
    console.log(response);
    if (response && response.status === 200) {
      toast.success('Publicador Cadastrado com Sucesso');
    } else {
      toast.error('Falha ao Cadastrado o Publicador');
    }
  } catch (error) {
    toast.error('Falha ao Cadastrado o Publicador');
  }
}

export default function Publishers() {
  return (
    <Container>
      <h1>Inserir Novo Publicador</h1>

      <FormStyle schema={schema} onSubmit={handleSubmit}>
        <div>
          <InputStyle
            name="name"
            type="text"
            placeholder="Nome do Publicador"
          />
          <InputStyle name="group_id" type="number" placeholder="Grupo" />

          <div className="checkDiv">
            <CheckStyle name="elder" /> Ancião
          </div>

          <div className="checkDiv">
            <CheckStyle name="ministerial_servant" /> Servo Ministerial
          </div>

          <div className="checkDiv">
            <CheckStyle name="pioneer" /> Pioneiro
          </div>

          <button type="submit">Criar Grupo</button>
        </div>
      </FormStyle>
    </Container>
  );
}
