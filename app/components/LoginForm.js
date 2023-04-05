import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const LoginForm = () => {
  return (
    <FormContainer>
      <FormInput placeholder={'example@domain.com'} title={'Email'} />
      <FormInput placeholder={'********'} title={'Password'} />
      <FormSubmitButton title='Login' />
    </FormContainer >
  )
}

const styles = StyleSheet.create({

});

export default LoginForm;
