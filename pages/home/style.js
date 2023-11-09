import { StyleSheet } from "react-native";
import { PADDING } from "../../tools/constants";

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
    }
    
})

export default homeStyles