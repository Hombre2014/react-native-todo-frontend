import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import React from 'react';

const FormSelectorBtn = ({ title, backgroundColor, style }) => {
  return (
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.container, style, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = {
  container: { height: 45, width: '50%', backgroundColor: 'rgba(27,27,51,0.4)', justifyContent: 'center', alignItems: 'center' },
  title: { color: 'white', fontSize: 16 }
};

export default FormSelectorBtn;
