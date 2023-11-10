import { View, Text, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import homeStyles from './style';






const Home = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getParking = async () => {
    try {
      const response = await fetch('http://localhost:3000/parkings');
      console.log(response);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getParking();
  }, []);


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
          showsHorizontalScrollIndicator={false}
          style={homeStyles.scrollableList}
          renderItem={({ item }) => (
            <View style={homeStyles.scrollableListItems}>
              <Text>{item.name}</Text>
              <Image source={{uri: item.imageUrl}}></Image>
            </View>
          )}
        />
        <Text>Hello</Text>

      {/* <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text>
                {item.name}
              </Text>
            )}
          />
        )}
      </View> */}

      {/* Liste des activités */}
    </ScrollView>
  )
}

export default Home