import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Page, Input, Header, BackButton,ScreenBtn } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { otpAtom } from '../../jotai-store';
import { useAtom } from 'jotai';
import api from "../../api";
import { Toast } from "react-native-toast-message/lib/src/Toast";


export const ConfirmNewPassword = ({ navigation }) => {
  const [otp,setotp] = useAtom(otpAtom);
  const[password,setPassword]= useState({})
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
  const MoveToNextPage= async()=>{
       if(password.password === password.confirmpassword){
        api.put('/passauth',{_id:otp.id,password:password.password}).then(()=>{
          navigation.navigate('Login')
        }).catch((err) => {
          let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
          console.log(message)
          return Toast.show({
            type: 'error',
            text1: `${message}`,
            position: 'top',
            autoHide: true
          })
    
    
        })
       }else{
        return Toast.show({
          type: 'error',
          text1: `Password and Confirm Password are not same`,
          position: 'top',
          autoHide: true
        })
       }
  }

  return (
    <Page>
      <Header
        startIcon={<BackButton navigation={navigation} />}
        title={"Confirm New Password"}
      />

      <View style={{...styles.container, }}>
        <Text style={{fontSize:15, paddingTop:15, fontWeight:400, marginBottom:30}}>Please enter your new Password</Text>
        <Input labelName={"Password"} placeholder={"Enter your Password"}
        onChange={(text)=>{
          setPassword({...password,password:text})
        }}
        />
        <Input labelName={"Confirm Password"} placeholder={"Enter your Password"} style={{paddingTop:8}}   onChange={(text)=>{
          setPassword({...password,confirmpassword:text})
        }}/>

        <ScreenBtn onPress={MoveToNextPage} style={{marginVertical:195}}>Continue</ScreenBtn>
      </View>
    </Page>
  );
};
