import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import client from '../api/client';

const ImageUpload = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
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

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + "_profile",
      uri: profileImage,
      type: 'image/png',
    });

    try {
      const res = await client.post('/upload-profile', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM4NTkzYTRjMjk0OTkzZmZjOWE1MDYiLCJpYXQiOjE2ODE5NDM4OTAsImV4cCI6MTY4MjAzMDI5MH0.Jyakvpnknaqk5A8DyFWYBPM7f4JEIiqXZxdKwTSJoGw`
        },
        onUploadProgress: ({ loaded, total }) => setUploadProgress(loaded / total),
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtnContainer}>
          {profileImage ? <Image source={{ uri: profileImage }} style={{ width: '100%', height: '100%' }} /> : <Text style={styles.uploadBtn}>Upload Profile Image</Text>}
        </TouchableOpacity>
        {uploadProgress ?
          <Text>
            {uploadProgress}
          </Text> : null
        }
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
    overflow: 'hidden',
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
