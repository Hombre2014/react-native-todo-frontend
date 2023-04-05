import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';

const LoginForm = () => {
  return (
    <FormContainer>
      <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Login</Text>
    </FormContainer >
  )
}

const styles = StyleSheet.create({

});

export default LoginForm;
