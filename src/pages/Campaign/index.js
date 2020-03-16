import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import api from '../../services/api';
import {
  FormStyle,
  InputStyle,
  Container,
  SelectStyle,
  CheckAdmin,
  CheckWraper,
  LinkPages,
} from './styles';

import logo from '../../assets/vila-dalila-logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é Obrigatória')
    .min(6, 'Mínimo 6 caracteres'),
});

export default function Campaign() {
  const [publishers, setPublishers] = useState();
  const [selectPub, setSelectPub] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`publishers`);

        setPublishers(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  async function handleSubmit({
    name,
    email,
    password,
    confirmPassword,
    admin,
  }) {
    if (password !== confirmPassword) {
      toast.error('As senhas devem ser idênticas, tente novamente!');
      return;
    }
    try {
      await api.post('users', {
        name,
        email,
        password,
        confirmPassword,
        admin,
        publisher_id: selectPub.id,
      });

      toast.success('Usuário Cadastrado com sucesso!');
    } catch (err) {
      toast.error('Erro ao criar novo usuário!');
    }
  }

  return (
    <>
      <Container>
        <h1>Campanha Prédios e Condomínios</h1>
        <p>
          Esse formulário foi criado exclusivamente para registro de ocorrências
          do trabalho realizado nas modalidades da campanha de prédios e
          condomínios.
        </p>
        <p>
          * Lembre-se sempre das orientações dadas no treinamento de cada
          modalidade.
          <br />
          <br />
          Queremos alcançar pessoas de todo tipo e em todos os lugares{' '}
          <strong>(Mateus 24:14)</strong>
        </p>
        <p style={{ color: 'red', fontWeight: 'bold' }}>* Obrigatório</p>
      </Container>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <LinkPages to="/new">Novo Registro de Atividade</LinkPages>
        <LinkPages to="/view">Ver Atividades Já realizadas</LinkPages>
      </div>
    </>
  );
}
