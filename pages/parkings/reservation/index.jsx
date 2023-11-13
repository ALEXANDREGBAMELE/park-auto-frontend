import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    SafeAreaView,
} from "react-native";

const ReservationPage = ({ route, navigation }) => {
    const { parkingId, level } = route.params;
      const [date, setDate] = useState(new Date(1598051730000));
      const [mode, setMode] = useState("date");
      const [show, setShow] = useState(false);

      const onChange = (event, selectedDate) => {
          const currentDate = selectedDate;
          setShow(false);
          setDate(currentDate);
      };

      const showMode = (currentMode) => {
          setShow(true);
          setMode(currentMode);
      };

      const showDatepicker = () => {
          showMode("date");
      };

      const showTimepicker = () => {
          showMode("time");
      };

    return (
        <SafeAreaView>
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    bottomButton: {
        position: "absolute",
        bottom: 16,
        width: "100%",
    },
});

export default ReservationPage;
