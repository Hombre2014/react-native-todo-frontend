import { View, Text } from 'react-native'
import React from 'react'

const FormHeader = ({ leftHeading, rightHeading, subHeading }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{leftHeading}</Text>
        <Text style={styles.heading}>{rightHeading}</Text>
      </View>
      <Text style={styles.subheading}>{subHeading}</Text>
    </>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: { fontSize: 30, fontWeight: 'bold', color: '#1b1b33' },
  subheading: { fontSize: 18, color: '#1b1b33', textAlign: 'center' }
}

export default FormHeader