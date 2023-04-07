import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const FormSubmitButton = ({ label, submitting, onPress }) => {
  const backgroundColor = submitting ? 'rgba(27,27,51,0.4)' : 'rgba(27,27,51,1)';

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  )
};

const styles = {
  container: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
};

export default FormSubmitButton;
