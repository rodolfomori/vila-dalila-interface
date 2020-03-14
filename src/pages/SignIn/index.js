import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isMobile from '../../utils/isMobile';

import {
  Container,
  CenterCard,
  InputField,
  SubmitButton,
  Form,
  Footer,
} from './styles';

import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/vila-dalila-logo.svg';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mobile = isMobile.any();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  function handleChange(e) {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      default:
    }
  }

  return (
    <>
      <Container mobile={mobile}>
        <CenterCard
          style={{
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: mobile ? 0 : 25,
            borderBottomRightRadius: 0,
            borderTopRightRadius: mobile ? 25 : 0,
          }}
        >
          <img src={logo} alt="logo" style={{ width: '250px' }} />
        </CenterCard>

        <CenterCard
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: mobile ? 25 : 0,
            borderBottomRightRadius: 25,
            borderTopRightRadius: mobile ? 0 : 25,
            background: '#EBEBEB',
          }}
        >
          <Form
            // schema={schema}
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <InputField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
            <InputField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <SubmitButton
              variant="contained"
              color="primary"
              style={{ background: '#7467ef', color: '#EEE' }}
              type="submit"
            >
              {loading ? 'Carregando...' : 'Acessar'}
            </SubmitButton>
          </Form>
        </CenterCard>
      </Container>
      <Footer>
        <a href="/privacy">Política de Privacidade</a>
      </Footer>
    </>
  );
}
