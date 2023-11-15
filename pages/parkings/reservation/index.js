// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Button,
//   DatePickerIOS,
//   TimePickerAndroid,
//   Platform,
// } from 'react-native';

// const ReservationPage = ({ route, navigation }) => {
//   const { parkingId, level } = route.params;
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState(new Date());
//   const [estimatedDuration, setEstimatedDuration] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChange = async () => {
//     if (Platform.OS === 'ios') {
//       // Pour iOS, utilisez le composant DatePickerIOS
//       // Vous pouvez personnaliser davantage cela selon vos besoins
//     } else {
//       // Pour Android, utilisez TimePickerAndroid
//       try {
//         const { action, hour, minute } = await TimePickerAndroid.open({
//           hour: selectedTime.getHours(),
//           minute: selectedTime.getMinutes(),
//           is24Hour: true,
//         });

//         if (action !== TimePickerAndroid.dismissedAction) {
//           const newTime = new Date();
//           newTime.setHours(hour);
//           newTime.setMinutes(minute);
//           setSelectedTime(newTime);
//         }
//       } catch (error) {
//         console.error('Erreur lors de la sélection de l\'heure:', error);
//       }
//     }
//   };

//   const handleReservation = () => {
//     // Ajoutez ici la logique pour traiter la réservation
//     // Utilisez les valeurs de selectedDate, selectedTime et estimatedDuration
//     // Vous pouvez les envoyer à votre API, les stocker localement, etc.
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Formulaire de Réservation</Text>

//       {/* Champs de date */}
//       <Text>Date:</Text>
//       {Platform.OS === 'ios' ? (
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           dateFormat="MMMM d, yyyy"
//         />
//       ) : (
//         <Text>Date Picker not supported on this platform</Text>
//       )}

//       {/* Champs d'heure */}
//       <Text>Heure:</Text>
//       <Button title="Sélectionner l'heure" onPress={handleTimeChange} />

//       {/* Champs de durée estimée */}
//       <Text>Durée estimée (en minutes):</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Entrez la durée estimée"
//         value={estimatedDuration}
//         onChangeText={(text) => setEstimatedDuration(text)}
//       />

//       {/* Bouton de réservation */}
//       <Button title="Réserver" onPress={handleReservation} />

//       {/* Bouton de retour */}
//       <View style={styles.bottomButton}>
//         <Button title="Retour" onPress={() => navigation.goBack()} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   bottomButton: {
//     position: 'absolute',
//     bottom: 16,
//     width: '100%',
//   },
// });

// export default ReservationPage;
