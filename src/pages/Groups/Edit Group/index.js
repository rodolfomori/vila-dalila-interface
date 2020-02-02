import React, { useEffect, useState } from 'react';
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
  number: Yup.number('msg').required('msg'),
});

async function handleSubmit(data) {
  try {
    const response = await api.put(`groups/${data.number}`, data);
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

export default function NewGroups(props) {
  const [groups, setGroups] = useState();

  useEffect(() => {
    async function getData() {
      const { id } = props.match.params;
      try {
        const response = await api.get(`groups/${id}`);
        setGroups(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [props]);

  return (
    <Container>
      <h1>Editar Grupo </h1>

      <FormStyle schema={schema} initialData={groups} onSubmit={handleSubmit}>
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

          <button type="submit">Editar Grupo</button>
        </div>
      </FormStyle>
    </Container>
  );
}
