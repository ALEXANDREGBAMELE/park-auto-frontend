import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import homeStyles from './style';

const [data, setData] = useState([]);

useEffect(() => {
  fetchDataFromAPI();
}, []);

const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/parkings');
    const result = await response.json();
    setData(result);
  } catch (error) {
    console.error('Erreur de récupération des données :', error);
  }
};

const Home = () => {
  return (
    <ScrollView>
      {/* header start here */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.userName}>Alexqndre Gbamele</Text>
        <Image
          style={homeStyles.userImg}
          source={require('./../../assets/images/image1.jpg')} // Remplace cela par le chemin réel de ton image
        />
      </View>
      {/* header end here */}

      {/* Liste des activités */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      {/* Liste des activités */}
    </ScrollView>
  )
}

export default Home