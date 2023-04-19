import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permission to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.canceled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = () => {
    console.log(profileImage);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtnContainer}>
          <Text style={styles.uploadBtn}>Upload Profile Image</Text>
        </TouchableOpacity>
        <Text style={styles.skip}>Skip</Text>
        {profileImage ?
          <Text style={[styles.skip, { backgroundColor: 'blue', color: 'black', borderRadius: 8 }]}
            onPress={uploadProfileImage}
          >
            Upload
          </Text>
          : null}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.3,
  },
});

export default ImageUpload;
