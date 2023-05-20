import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Page, Input, Header, BackButton,ScreenBtn } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const ConfirmNewPassword = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderRadius: 50,
      marginTop: 40,
      height: "90%",
      width: "100%",
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 10,
    },
  });

  return (
    <Page>
      <Header
        startIcon={<BackButton navigation={navigation} />}
        title={"Confirm New Password"}
      />

      <View style={{...styles.container, }}>
        <Text style={{fontSize:15, paddingTop:15, fontWeight:400, marginBottom:30}}>Please enter your new Password</Text>
        <Input labelName={"Password"} placeholder={"Enter your Password"} />
        <Input labelName={"Confirm Password"} placeholder={"Enter your Password"} style={{paddingTop:8}}/>

        <ScreenBtn onPress={() => navigation.navigate('Login')} style={{marginVertical:195}}>Continue</ScreenBtn>
      </View>
    </Page>
  );
};
