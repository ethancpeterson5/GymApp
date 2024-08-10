// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder login logic
    if (email === 'test@example.com' && password === 'password123') {
      Alert.alert('Login Successful', 'Welcome!');
      // Navigate to another screen if needed
      // navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  const handleResetWithPhone = () => {
    navigation.navigate('ResetPasswordWithPhone')
  };
  const handleResetWithEmail = () => {
    navigation.navigate('ResetPasswordWithEmail')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Reset Password with phone number" onPress={handleResetWithPhone} />
      <Button title="Reset Password with email" onPress={handleResetWithEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default HomeScreen;
