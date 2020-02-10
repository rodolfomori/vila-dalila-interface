import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import history from '../../../services/history';

import { Container, FormStyle, InputStyle } from './styles';
import api from '../../../services/api';

const schema = Yup.object().shape({
  leader: Yup.string('Insira um nome válido').required(
    'É Obrigatório adicionar um dirigente para o grupo'
  ),
  assistant: Yup.string('Insira um nome válido').required(
    'É Obrigatório adicionar um ajudante para o grupo'
  ),
  // number: Yup.number('msg').required('msg'),
});

async function handleSubmit(data) {
  console.log(data);

  try {
    await api.post('groups', data);
    toast.success('Grupo Cadastrado com Sucesso');
  } catch (error) {
    toast.error('Falha ao Criar o Grupo');
  }
}

export default function NewGroups() {
  return (
    <Container>
      <h1>Inserir Novo Grupo</h1>

      <FormStyle onSubmit={handleSubmit}>
        <div>
          <InputStyle
            name="number"
            type="number"
            placeholder="Número do Grupo"
          />
          <InputStyle
            name="leader"
            type="text"
            placeholder="Dirigente do Grupo"
          />
          <InputStyle
            name="assistant"
            type="text"
            placeholder="Assistente do Grupo"
          />

          <button type="submit">Criar Grupo</button>
        </div>
      </FormStyle>
    </Container>
  );
}
