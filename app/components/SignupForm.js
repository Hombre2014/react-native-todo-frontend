import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';
import FormSubmitButton from './FormSubmitButton';
import FormInput from './FormInput';

const SignupForm = () => {
  return (
    <FormContainer>
      <FormInput placeholder={'John Smith'} title={'Full Name'} />
      <FormInput placeholder={'example@domain.com'} title={'Email'} />
      <FormInput placeholder={'********'} title={'Password'} />
      <FormInput placeholder={'********'} title={'Confirm Password'} />
      <FormSubmitButton title='Sign up' />
    </FormContainer>
  )
}

const styles = StyleSheet.create({

});

export default SignupForm;
