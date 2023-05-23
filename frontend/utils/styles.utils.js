import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    justifyCenter: {
        justifyContent: "center"
    },
    justifyBetween: {
        justifyContent: "space-between"
    },

    padding:{
        paddingHorizontal:3
    },
    fullWidth: {
        width: '100%'
    },
    chip: {
        borderColor: '#EC91DB', 
        borderWidth: 0.5,
        marginRight: 7
    },
    marginY: {
        marginVertical: 5
    },
    marginX: {
        marginHorizontal: 5
    },
    slide: {
    },
    outlineButton: {
        backgroundColor: '#00000000',
        borderWidth: 1,
        borderColor: '#FF5E4C',
    },
    tabButtonStyle: {
        borderBottomColor: '#C0BCB7',
        borderBottomWidth: 2,
    },
    altButton: {
        backgroundColor: "#FF5E4C30",
        color: "#FF5E4C",
        height: 48,
        borderRadius: 13,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
        
    }
    
}) 