import React from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { createUser, signInWithGoogle } from '../../firebase/firebase-utils';
import { registerInitialValues, registerValidationSchema } from '../../formik';
import useRedirect from '../../hooks/useRedirect';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';

const Register = () => {
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/');

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            await createUser(values.email, values.password, values.name);
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Mail en uso');
            }
          }
          actions.resetForm();
        }}
      >
        <Form>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled type='button' onClick={signInWithGoogle}>
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
