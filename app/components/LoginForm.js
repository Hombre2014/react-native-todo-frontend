import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;

  const handleOnChangeText = (fieldName, value) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo)) return updateError('All fields required!', setError);
    if (!isValidEmail) return updateError('Invalid email!', setError);
    if (password.length < 8 || !password.trim()) return updateError('Password must be at least 8 characters long!', setError);
    return true;
  };

  const submitForm = () => {
    if (isValidForm) {
      console.log('On FormSubmit, UserInfo: ', userInfo);
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
        value={email}
        placeholder={'example@domain.com'}
        label={'Email'}
        autoCapitalize='none'
        onChangeText={(value) => handleOnChangeText('email', value)}
      />
      <FormInput
        value={password}
        placeholder={'********'}
        label={'Password'}
        autoCapitalize='none'
        secureTextEntry
        onChangeText={(value) => handleOnChangeText('password', value)}
      />
      <FormSubmitButton onPress={submitForm} label='Login' />
    </FormContainer >
  )
};

export default LoginForm;
