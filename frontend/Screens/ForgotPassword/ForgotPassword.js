import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Page, Input, Header, BackButton, ScreenBtn } from "../../components";
import { otpAtom } from "../../jotai-store";
import api from "../../api";
import { useAtom } from "jotai";
import { Toast } from "react-native-toast-message/lib/src/Toast";


export const ForgotPassword = ({ navigation }) => {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
    })
    const [otp,setotp] = useAtom(otpAtom);
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
    const MoveToNextPage = async()=>{
        await api.post('/passauth', loginDetails).then((res) => {
            
           setotp(res.data) 
            
        navigation.navigate('OtpVerification')
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
    }
    

    return (
        <Page>
            <Header
                startIcon={<BackButton navigation={navigation} />}
                title={"Forgot Password"}
            />
            <View style={styles.container}>
                <Text style={{ fontSize: 15, paddingTop: 15, fontWeight: 400 }}>Enter your email for authentication</Text>
                <Input
                    labelName={"Email"}
                    placeholder={"Enter your email"}
                    onChange={(text)=>{setLoginDetails({email:text})}}
                />
                <ScreenBtn onPress={MoveToNextPage} style={{ marginVertical: 328 }}>Continue</ScreenBtn>
            </View>

        </Page>

    )
}