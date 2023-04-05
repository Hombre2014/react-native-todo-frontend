import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import FormContainer from './FormContainer';

const SignupForm = () => {
  return (
    <FormContainer>
      <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Sign up</Text>
    </FormContainer>
  )
}

const styles = StyleSheet.create({

});

export default SignupForm;
