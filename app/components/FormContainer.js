import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <View style={styles.container}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width, },
});

export default FormContainer;
