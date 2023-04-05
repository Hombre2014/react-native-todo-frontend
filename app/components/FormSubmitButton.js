import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const FormSubmitButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = {
  container: {
    height: 45,
    backgroundColor: 'rgba(27,27,51,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
};

export default FormSubmitButton;
