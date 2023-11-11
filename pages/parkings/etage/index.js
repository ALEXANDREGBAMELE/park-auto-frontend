import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ParkingEtagePage = ({ navigation }) => {
  // Simulons des données statiques pour les étages et les places disponibles
  const [floors, setFloors] = useState([
    { id: 1, name: 'Étage 1', availableSpots: 10, totalSpots: 20 },
    { id: 2, name: 'Étage 2', availableSpots: 5, totalSpots: 15 },
    // ... ajoutez d'autres étages au besoin
  ]);

  const handleFloorPress = (floorId) => {
    // Naviguez vers la page de détails de l'étage en passant l'ID de l'étage
    navigation.navigate('ParkingPlacePage', { id: floorId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>État du Parking</Text>

      {floors.map((floor) => (
        <TouchableOpacity
          key={floor.id}
          style={styles.floorItem}
          onPress={() => handleFloorPress(floor.id)}
        >
          <Text style={styles.floorName}>{floor.name}</Text>
          <Text>
            Places disponibles: {floor.availableSpots}/{floor.totalSpots}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  floorItem: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  floorName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ParkingEtagePage;
