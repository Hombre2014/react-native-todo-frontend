import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FormContainer from './FormContainer';
import FormSubmitButton from './FormSubmitButton';
import FormInput from './FormInput';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';

const SignupForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const { fullName, email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (fieldName, value) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  console.log('UserInfo: ', userInfo);

  const isValidForm = () => {
    // console.log('User info is: ', userInfo);
    // Checks if all fields have been filled out
    if (!isValidObjField(userInfo)) return updateError('All fields required!', setError);
    // Check of the full name is at least 3 characters long and valid
    if (fullName.length < 3 || !fullName.trim()) return updateError('Full name must be at least 3 characters long!', setError);
    // Check if the email is valid
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    // Check if the password is at least 8 characters long
    if (password.length < 8 || !password.trim()) return updateError('Password must be at least 8 characters long!', setError);
    // Check if the password and confirm password match
    if (password !== confirmPassword) return updateError('Passwords do not match!', setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm) {
      // do something
      console.log('On FormSubmit, UserInfo: ', userInfo);
      console.log('On FormSubmit, Error: ', error);
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={fullName}
        placeholder={'John Smith'}
        label={'Full Name'}
        onChangeText={(value) => handleOnChangeText('fullName', value)}
      />
      <FormInput
        value={email}
        autoCapitalize='none'
        placeholder={'example@domain.com'}
        label={'Email'}
        onChangeText={(value) => handleOnChangeText('email', value)}
      />
      <FormInput
        value={password}
        autoCapitalize='none'
        secureTextEntry
        placeholder={'********'}
        label={'Password'}
        onChangeText={(value) => handleOnChangeText('password', value)}
      />
      <FormInput
        value={confirmPassword}
        autoCapitalize='none'
        secureTextEntry
        placeholder={'********'}
        label={'Confirm Password'}
        onChangeText={(value) => handleOnChangeText('confirmPassword', value)}
      />
      <FormSubmitButton
        onPress={submitForm}
        label='Sign up'
      />
    </FormContainer>
  )
}

export default SignupForm;
