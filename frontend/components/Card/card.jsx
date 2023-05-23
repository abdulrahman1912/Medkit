import React from 'react';
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper"


const styles = StyleSheet.create({

    imgcontainer:{
        backgroundColor:"#fff",
        borderRadius:10,
        flexDirection: "column",
    },
})




export const CustomCard =({children, style, ...props }) => {
    return(
        <Pressable
        {...props}
        style={{
            backgroundColor: "#E2E4EB",
            padding: 8,
            ...style
        }}>
          {children}
        </Pressable>
    )
}

export const CardContent =({src, style, title}) => {
    return (
        <View style={{...style}}>
            <Image source={src} style ={{...style}}/>
            <Text>{title}</Text>
        </View>
    )
}