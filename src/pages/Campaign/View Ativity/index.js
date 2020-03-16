import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import api from '../../../services/api';
import {
  FormStyle,
  InputStyle,
  Container,
  SelectStyle,
  CheckAdmin,
  CheckWraper,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é Obrigatória')
    .min(6, 'Mínimo 6 caracteres'),
});

export default function ViewAtivity() {
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

  // { name, email, password, confirmPassword, admin }
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
    <Container>
      {/* <img src={logo} alt="logo gobarber" /> */}
      <h1>Novo Usuário</h1>

      <FormStyle onSubmit={handleSubmit}>
        <InputStyle name="name" placeholder="Nome Completo" />
        <InputStyle name="email" type="email" placeholder="Seu e-mail" />
        <InputStyle
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <InputStyle
          name="confirmPassword"
          type="password"
          placeholder="Confirme Sua senha secreta"
        />
        {publishers && (
          <SelectStyle
            name="publisher_id"
            options={publishers}
            onChange={setSelectPub}
            getOptionValue={pub => pub.name}
            getOptionLabel={pub => pub.name}
          />
        )}
        <CheckWraper>
          <CheckAdmin name="admin" />
          <p>Administrador</p>
        </CheckWraper>
        <button type="submit">Criar Conta</button>
      </FormStyle>
    </Container>
  );
}
