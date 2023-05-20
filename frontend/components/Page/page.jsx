import React from "react";
import { Text, View, StyleSheet,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Page = (props) => {
const styles = StyleSheet.create({

    container:{
        height:'100%',
        position:'relative',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('screen').width,
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

 export const PageMain = (props) => {
    const styles = StyleSheet.create({
    
        container:{
            height:'100%',
            position:'relative',
            alignItems:'center',
            display:'flex',
            flexDirection:'column',
            paddingHorizontal:20,
            height: Dimensions.get('window').height,
            width: Dimensions.get('screen').width,
            backgroundColor:'#FFFFFF',
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