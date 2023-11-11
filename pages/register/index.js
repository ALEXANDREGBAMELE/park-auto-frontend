import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const RegisterPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Effectuez la logique d'enregistrement (appel API, mise à jour de la base de données, etc.)
      const registrationResponse = await fetch('http://localhost:3000/users/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const registrationData = await registrationResponse.json();

      if (registrationData.success) {
        console.log("hello")
        // Inscription réussie, naviguez vers la page de connexion ou toute autre page selon les besoins
        navigation.navigate('LoginPage');
      } else {
        // Échec de l'inscription, gérez l'erreur (affichez un message, etc.)
        console.error('Échec de l\'inscription :', registrationData.message);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>INSCRIPTION</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(text) => setName(text)}
        value={name}
      />

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

      <Button title="S'inscrire" onPress={handleRegister} />

      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.loginLink}>Vous avez déjà un compte ? Connectez-vous ici</Text>
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
  loginLink: {
    color: '#3498db',
    marginTop: 16,
  },
});

export default RegisterPage;
