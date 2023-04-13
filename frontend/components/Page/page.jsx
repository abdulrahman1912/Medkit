import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Page = (props) => {
const styles = StyleSheet.create({

    container:{
        height:'100%',
        position:'relative',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        
        paddingTop:0,
        backgroundColor:'#91A0F6',
    },

    textstyle:{
        fontSize: 18,
        textAlign: 'center',
        color:'#000',
    },
})

    return(
        <SafeAreaView>
             <View style={styles.container}>
            {props.children}
             </View>
        </SafeAreaView>
       
    )
 }