// Importez les modules nécessaires
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// Définissez le composant de la page d'accueil
const HomePage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Vous pouvez implémenter ici la logique de recherche en fonction de `searchQuery`
    console.log('Recherche:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Gestion de Parking Auto</Text>

      {/* Champ de recherche */}
      <TextInput
        style={styles.input}
        placeholder="Où est garée votre voiture ?"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Bouton de recherche */}
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Rechercher</Text>
      </TouchableOpacity>

      {/* Liens vers différentes fonctionnalités */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ParkingListPage')}
      >
        <Text style={styles.buttonText}>Liste des Parkings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ParkingListPage')}
      >
        <Text style={styles.buttonText}>Réserver une Place</Text>
      </TouchableOpacity>

      {/* Ajoutez d'autres liens au besoin */}
    </View>
  );
};

// Styles pour le composant
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
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Exportez le composant
export default HomePage;
