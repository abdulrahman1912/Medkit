import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import {
    Smallbtn,
    Page,
    Header,
    BackButton,
  } from "../../../components";

import Qrcode from "../../../assets/images/qrcode.svg";
import Camera from "../../../assets/icons/camera.svg";
export const Scan = ({navigation}) => {


    
    const styles = StyleSheet.create({
        safeArea: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#91A0F6",
            height: "100%",
            paddingTop: 25,
            alignItems: "center",
          },
      
          container: {
            backgroundColor: "#fff",
            marginTop:20,
            paddingTop:20,
            paddingHorizontal:20,
            paddingBottom:80,
            justifyContent:"center",
            width: "100%",
            textAlign: "left",
          },

          btncontainer:{
            display:"flex",
            justifyContent:"flex-end",
            alignItems:"center",
          },

          button: {
            backgroundColor: "#91A0F6",
            marginTop: 185,
            height: 60,
            width: "100%",
            borderRadius: 20,
            alignItems: "center",
            justifyContent:"center",
            display:"flex",
            flexDirection:"row"
      
          },
    })

   
      
   return (
    <SafeAreaView style={styles.safeArea}>
          <Header startIcon={<BackButton/>} title={"Scan Qrcode"}/>
          <View style={styles.container}>
        <Qrcode/>

        <View style={styles.btncontainer}>
    
        <Pressable style={styles.button}  onPress={() => navigation.navigate('QRScanner')}>
                <Text style={{fontSize:18,color:"#fff", fontWeight:700}}>Checkout </Text>
                <Camera style={{width:"20"}}/>
              </Pressable>
        </View>
          </View>
    </SafeAreaView>
   )
}