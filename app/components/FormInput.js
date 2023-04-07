import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormInput = (props) => {
  const { label, placeholder, error } = props;

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        {error ? <Text style={{ color: 'red', fontSize: 16, marginBottom: 5 }}>{error}</Text> : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  )
}

const styles = {
  input: { height: 35, borderColor: '#1b1b33', borderWidth: 1, borderRadius: 8, fontSize: 16, paddingLeft: 10, marginBottom: 20 },
}

export default FormInput;
