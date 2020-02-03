import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o Nome'),
    email: Yup.string()
      .email()
      .required('Digite um e-mail válido'),
    oldPassword: Yup.string().min(6),
    password: Yup.string()
      .min(6)
      .when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required('Necessário confirmar corretamente a senha')
            .oneOf([Yup.ref('password')])
        : field
    ),
  });

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  console.log(profile);
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Sua nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
