import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import parkingsStyles from './style';
import BASE_URL_LOCAL from '../../tools/constants'

const ParkingListPage = ({ navigation }) => {
  const [parking, setParking] = useState(null);
  const [searchText, setSearchText] = useState('');

  const getParkingDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL_LOCAL}/parkings`);
      const data = await response.json();
      console.log(data);
      setParking(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du parking:', error);
    }
  };

  useEffect(() => {
    getParkingDetails();
  }, []);

  if (!parking) {
    return (
      <View style={styles.container}>
        <Text>Chargement des détails du parking...</Text>
      </View>
    );
  }

  const updateSearch = (text) => {
    setSearchText(text);
    const filteredData = parking.filter(
      (parking) =>
        parking.name.toLowerCase().includes(text.toLowerCase()) ||
        parking.location.toLowerCase().includes(text.toLowerCase())
    );
    setParkingData(filteredData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.parkingItem} onPress={() => handleParkingPress(item.id)}>
      <Image source={item.imgUrl} style={styles.parkingImage} />
      <View style={styles.parkingInfo}>
        <Text style={styles.parkingName}>{item.name}</Text>
        <Text style={styles.parkingLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleParkingPress = (parkingId) => {
    navigation.navigate('ParkingDetailPage', { id: parkingId });
  };

  return (
    <View style={styles.container}>
      <View style={parkingsStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Liste des Parkings</Text>
      </View>
      
      <SearchBar
        placeholder="Rechercher..."
        onChangeText={updateSearch}
        value={searchText}
        containerStyle={styles.searchBar}
      />
      <FlatList
        data={parking}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
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
  searchBar: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  parkingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  parkingImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  parkingInfo: {
    marginLeft: 16,
  },
  parkingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  parkingLocation: {
    fontSize: 14,
    color: '#777',
  },
});

export default ParkingListPage;
