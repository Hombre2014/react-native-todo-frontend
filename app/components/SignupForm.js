import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FormContainer from './FormContainer';
import FormSubmitButton from './FormSubmitButton';
import FormInput from './FormInput';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import { Formik } from 'formik';
import * as Yup from 'yup';
import client from '../api/client';

const validationSchema = Yup.object({
  fullName: Yup.string().trim().required('Full name is required!').min(3, 'Full name is too short!'),
  email: Yup.string().trim().required('Email is required!').email('Invalid email!'),
  password: Yup.string().trim().required('Password is required!').min(8, 'Password is too short!'),
  confirmPassword: Yup.string().trim().required('Confirm password is required!').oneOf([Yup.ref('password'), null], 'Passwords do not match!'),
});

const SignupForm = () => {
  const userInfo = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [error, setError] = useState('');
  const { fullName, email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (fieldName, value) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo)) return updateError('All fields required!', setError);
    if (fullName.length < 3 || !fullName.trim()) return updateError('Full name must be at least 3 characters long!', setError);
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    if (password.length < 8 || !password.trim()) return updateError('Password must be at least 8 characters long!', setError);
    if (password !== confirmPassword) return updateError('Passwords do not match!', setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm) {

    }
  };

  const signUp = async (values, formikActions) => {
    const res = await client.post('/create-user', {
      ...values
    });
    console.log(res.data);
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
          const { fullName, email, password, confirmPassword } = values;
          return <>
            <FormInput
              value={fullName}
              error={touched.fullName && errors.fullName}
              placeholder={'John Smith'}
              label={'Full Name'}
              onBlur={handleBlur('fullName')}
              onChangeText={handleChange('fullName')}
            />
            <FormInput
              value={email}
              error={touched.email && errors.email}
              autoCapitalize='none'
              placeholder={'example@domain.com'}
              label={'Email'}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            <FormInput
              value={password}
              error={touched.password && errors.password}
              autoCapitalize='none'
              secureTextEntry
              placeholder={'********'}
              label={'Password'}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
            />
            <FormInput
              value={confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              autoCapitalize='none'
              secureTextEntry
              placeholder={'********'}
              label={'Confirm Password'}
              onBlur={handleBlur('confirmPassword')}
              onChangeText={handleChange('confirmPassword')}
            />
            <FormSubmitButton
              onPress={handleSubmit}
              label='Sign up'
              isSubmitting={isSubmitting}
            />
          </>
        }}
      </Formik>
    </FormContainer>
  )
}

export default SignupForm;
