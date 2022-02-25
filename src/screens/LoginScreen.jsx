import React from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';

import AppBar from '../components/Appbar';
import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>LogIn</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <Button label="Submit" />
        <View style={styles.fotter}>
          <Text style={styles.fotterText}>Not registered?</Text>
          <TouchableOpacity>
            <Text style={styles.fotterLink}>Sign up here!</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  fotterText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },

  fotterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },

  fotter: {
    flexDirection: 'row',
  },
});
