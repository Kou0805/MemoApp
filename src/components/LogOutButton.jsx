import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function LogOutButton() {
  // fooksはコンポーネント直下に置く
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return (
    <TouchableOpacity onPress={handlePress} style={StyleSheet.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});
