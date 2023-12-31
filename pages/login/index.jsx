import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = () => {
    navigation.navigate('RegisterPage');
  };

  const handleLogin = async () => {
    try {


      const response = await fetch(`http://localhost:3000/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(response)
      console.log(data)
      console.log("Premier debeugeur, " + data.data)
      console.log("Deuxieme debeugeur, " + data.user)
      console.log("Troisieme debeugeur, " + data.statut)
      if (response.status === 200) {
       
        const token= data.token;
        const user = data.user;

        // Stockez le token d'authentification dans AsyncStorage
        await AsyncStorage.setItem('token', token);
        console.log(user.roleId)
        if (user.roleId === 1) {
          navigation.navigate('DashboardAdmin');
        } else {
          navigation.navigate('home');
        }
      } else {
        console.log('L\'authentification a échoué.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'authentification:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONNEXION</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <Button title="Se Connecter" onPress={handleLogin} />

      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.registerLink}>Vous n'avez pas de compte ? Inscrivez-vous ici</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  registerLink: {
    color: '#3498db',
    marginTop: 16,
  },
});

export default LoginPage;
