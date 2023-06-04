import React from 'react';
import { View, TextStyle, StyleSheet, Pressable, StyleProp, ViewStyle, Text } from "react-native";
import Arrow from '../../assets/icons/goforward.svg';
import {Styles} from '../../utils/styles.utils';
const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginTop: 25,
        borderRadius:20,
        borderColor:"#91A0F680",
        borderWidth:1,
        backgroundColor:"#EEEFF4"
      },

      flexContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
      }
      
})

export const ProfileNavLink =({
    svg,
    text,
    onPress,
    style,
    textStyle,
    fontSize,
}) => {

    return(
        <Pressable
        style={{ ...styles.container,width:330, height:55, ...style }} 
        onPress={onPress}
      >
        <View style={[Styles.flexContainer, Styles.justifyCenter]}>
          {svg ?? null}
          <Text 
            fontSize={fontSize} 
            fontWeight='500'
            style={{ marginLeft:15, fontSize:15, ...textStyle }}
          >
              {text}
            </Text>
        </View>
        { 
          
          <Arrow style={{marginTop:10}}/> 
        } 
            
        </Pressable>
    )
}
