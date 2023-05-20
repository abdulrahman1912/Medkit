import {React} from "react";
import { 
    StyleSheet, 
    TextInput, 
    View, 
    Keyboard, 
    TouchableOpacity, 
} from "react-native";

import Filter from "../../assets/icons/filter.svg";
const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: "#91A0F680",
        borderRadius: 20,
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        paddingVertical: 10
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }, 
    textInput: {
        marginLeft: 10
    }
});


export const SearchBar = ({
onChangeText,
onFilter,
style,
})=> {

    return(
        <View style={[styles.searchbar, styles.container, style]}>
        <View style={styles.container}>
        <TouchableOpacity onPress={onFilter}>
            <Filter fill={"#000000B8"}/>
        </TouchableOpacity>
            <TextInput 
                placeholder="Search for medicine"
                style={styles.textInput} 
                onChangeText={onChangeText}
                onBlur={() => Keyboard.dismiss()}
                cursorColor={"#000000B8"}
                placeholderTextColor={"#000000B8"}
            />
        </View>
       
    </View>
    )
}