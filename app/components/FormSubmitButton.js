import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const FormSubmitButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  )
};

const styles = {
  container: {
    height: 45,
    backgroundColor: 'rgba(27,27,51,1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
};

export default FormSubmitButton;
