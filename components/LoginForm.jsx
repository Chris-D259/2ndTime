import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';




 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
 
  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
 
    if (email === 'monke' && password === 'banan') {
        navigation.navigate('GeneralBudi');
    } else {
      alert('Invalid credentials.');
      console.log(email, password);
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login To See Your Account</Text>
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
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    color: 'white',
    backgroundColor: 'black',
    height: 40,
    width: 140,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontStyle: 'bold'
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
 
export default LoginForm;
