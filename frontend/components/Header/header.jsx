import React from "react";
import { StyleSheet, View, Text} from "react-native"


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingTop:50
    },
    startContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        // fontFamily: "Encode Sans",
        fontWeight: "700",
        color:"#fff",
        marginHorizontal: 20,
        fontSize: 20
    }
});

export const Header = ({
    title,
    startIcon,
    endIcon,

}) => {

    return (
        <View style={styles.header}>
            <View style={styles.startContainer}>
                { startIcon }
                <Text style={styles.text}>{title}</Text>
            </View>
            { endIcon }
        </View>
    )
}
