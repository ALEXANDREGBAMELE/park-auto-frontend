import { StyleSheet } from "react-native";
import { PADDING } from "../../tools/constants";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const homeStyles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal : PADDING.horizontal,
    },
    userImg:{
        height : 50,
        width: 50,
        borderRadius : 50/2
    },

    userName : {
        fontSize : 16
    },
    scrollableList:{
        paddingHorizontal : PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    scrollableListItems:{
        // paddingHorizontal : 15,
        // paddingVertical: 15,
        // marginRight: 15,
        backgroundColor: 'white'
        
    }
})

export default homeStyles