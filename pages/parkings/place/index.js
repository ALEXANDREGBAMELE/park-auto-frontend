import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ParkingPlacePage = ({ navigation }) => {
  // Simulons des données statiques pour les places du parking
  const [parkingSpots, setParkingSpots] = useState([
    { id: 1, floorId: 1, spotNumber: 1, isOccupied: false },
    { id: 2, floorId: 1, spotNumber: 2, isOccupied: true },
    { id: 3, floorId: 1, spotNumber: 3, isOccupied: false },
    // ... ajoutez d'autres places au besoin
  ]);

  const handleSpotPress = (spotId) => {
    // Naviguez vers la page de détails de la place en passant l'ID de la place
    navigation.navigate('SpotDetailPage', { id: spotId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>État du Parking</Text>

      {parkingSpots.map((spot) => (
        <TouchableOpacity
          key={spot.id}
          style={[
            styles.spotItem,
            { backgroundColor: spot.isOccupied ? 'red' : 'green' },
          ]}
          onPress={() => handleSpotPress(spot.id)}
        >
          <Text style={styles.spotText}>{spot.spotNumber}</Text>
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
  spotItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 8,
    margin: 8,
  },
  spotText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ParkingPlacePage;
