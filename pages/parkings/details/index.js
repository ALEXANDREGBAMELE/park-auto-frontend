import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import parkingsStyles from '../style'
import BASE_URL_LOCAL from '../../../tools/constants'
const ParkingDetailPage = ({ route, navigation }) => {
  const { id } = route.params;
  const [parking, setParking] = useState(null);
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [spaces, setSpaces] = useState([]);

  const getParkingDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL_LOCAL}/parkings/${id}`);
      const data = await response.json();
      setParking(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du parking:', error);
    }
  };

  const getLevels = async () => {
    try {
      const response = await fetch(`${BASE_URL_LOCAL}/levels?parkingId=${id}`);
      const data = await response.json();
      console.log("les niveaux d'etage : " + data)
      setLevels(data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste des étages:', error);
    }
  };

  const getSpaces = async (id) => {
    try {
      const response = await fetch(`${BASE_URL_LOCAL}/spaces?id=${id}`);
      const data = await response.json();
      console.log("les places : " + data)
      setSpaces(data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste des places:', error);
    }
  };

  useEffect(() => {
    getParkingDetails(id);
    getLevels();
  }, [id]);

  useEffect(() => {
    if (selectedLevel) {
      getSpaces(selectedLevel.id);
    }
  }, [selectedLevel]);

  if (!parking || !levels) {
    return (
      <View style={styles.container}>
        <Text>Chargement des détails du parking...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Affichage des détails du parking en haut */}
      <View>
        <Text style={styles.heading}>{parking.name}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Emplacement:</Text>
          <Text style={styles.detailText}>{parking.location}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Nombre total de places: {parking.capacity}</Text>
          <Text style={styles.detailText}>{parking.totalSpots}</Text>
        </View>
      </View>

      {/* Affichage de la liste horizontale des niveaux */}
      <Text style={styles.subHeading}>Sélectionnez un niveau:</Text>
      <FlatList
        style={styles.scrollerContainer}
        horizontal
        data={levels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity
            onPress={() => setSelectedLevel(item)}
            style={[styles.levelButton, selectedLevel === item && styles.selectedLevelButton, parkingsStyles.services]}
          >
            <Text>{item.name}</Text>
            
          </TouchableOpacity>
        )}
      />

      {/* Affichage de la liste des places du niveau sélectionné */}
      <Text style={styles.subHeading}>Places du niveau sélectionné:</Text>
      <FlatList
        data={spaces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.spotContainer}>
            <Text>{item.number}</Text>
            <Text>{item.status}</Text>
            <Button
              title="Je réserve"
              onPress={() => {
                // Ajoutez ici la logique de réservation
                if (selectedLevel) {
                  // Faites quelque chose avec le niveau sélectionné
                  // Par exemple, naviguez vers une page de réservation avec les détails
                  navigation.navigate('', { parkingId: id, level: selectedLevel });
                } else {
                  alert('Veuillez sélectionner un niveau avant de réserver.');
                }
              }}
            />
           
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        {/* Bouton de retour */}
        <Button title="Retour" onPress={() => navigation.goBack()} />
      </View>
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
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  detailText: {
    flex: 1,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  spotContainer: {
    marginVertical: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  buttonContainer: {
    marginTop: 16,
  },
  scrollerContainer: {
    // backgroundColor: 'blue',
    height: 200,
  }
});

export default ParkingDetailPage;
