import {React, useState} from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Page, Input,Header,BackButton,ScreenBtn} from "../../components";


export const ForgotPassword = ({navigation}) => {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
        type: ""
    })
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

    return(
        <Page>
            <Header 
                startIcon={<BackButton navigation={navigation}/>} 
                title={"Forgot Password"}
            />
            <View style={styles.container}>
            <Text style={{fontSize:15, paddingTop:15}}>Enter your email for authentication</Text>
            <Input
        style={{...styles.inputcontainer, marginVertical:50}}
        labelName="Email"
        placeholder="johndoe@gmail.com"
        type={'emailAddress'}
        value={loginDetails.email}
        onChange={(text) => setLoginDetails({ ...loginDetails, email: text })}
        activeUnderlineColor={"#91A0F6"}
        />

        <ScreenBtn style={{marginVertical:275}}>Continue</ScreenBtn>
            </View>

        </Page>

    )
}