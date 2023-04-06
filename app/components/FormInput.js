import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormInput = (props) => {
  const { label, placeholder } = props;

  return (
    <>
      <Text style={{ fontWeight: 'bold', }}>{label}</Text>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  )
}

const styles = {
  input: { height: 35, borderColor: '#1b1b33', borderWidth: 1, borderRadius: 8, fontSize: 16, paddingLeft: 10, marginBottom: 20 },
}

export default FormInput;
