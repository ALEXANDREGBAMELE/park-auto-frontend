import { StyleSheet } from "react-native";
import { PADDING } from "../../tools/constants";

const homeStyles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal : PADDING.horizontal,
        // position: 'relative',
        // marginBottom: 50,
        height:80
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
        paddingHorizontal : 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor:"white",
        height : 100,
        
    },
    services:{
        paddingHorizontal : PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        height : 20,
        marginRight: 15,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    scrollableListParking:{
        paddingHorizontal : 15,
        paddingVertical: 15,
        marginTop: 15,
        backgroundColor:"white",
        height : 100,
        
    },
})

export default homeStyles