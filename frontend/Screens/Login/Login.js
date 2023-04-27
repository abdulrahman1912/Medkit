import {React, useState} from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {Checkbox, Button} from "react-native-paper";
import { Page, Input} from "../../components";
import Image from "../../assets/images/Medkit-logo.svg";
import Google from "../../assets/icons/google.svg";



export const Login = ({ navigation }) => {
  
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    type: ""
})
const [showPassword] = useState(false);
const [checked, setChecked] = useState(false);

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

    container2:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    },

   

    imgcontainer: {
      zIndex: 100,
      marginTop: 30,
    },

    textstyle:{
        textAlign:"left",
    },

    inputcontainer:{
      marginTop:30,
    }, 

    button1:{
      display: "flex",
      width: "45%",
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#91A0F6",
      borderRadius:10,
    },

    button2:{
      display: "flex",
      width: "45%",
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      gap: 10,
      borderColor: "#91A0F6",
      borderWidth:1,
      borderRadius:10,
    },

    
  });

  return (
    <Page>
      <Image style={styles.imgcontainer} width="100%" height="18%" />

      <View style={styles.container}>
        <Text style={{fontSize:25,}}>Sign In</Text>
        <Text style={{marginTop:10, color:"#615B5B"}}>Please fill in your details</Text>
        <Input
        style={styles.inputcontainer}
        labelName="Email"
        placeholder="johndoe@gmail.com"
        type={'emailAddress'}
        value={loginDetails.email}
        onChange={(text) => setLoginDetails({ ...loginDetails, email: text })}
        />

        <Input
        style={{paddingTop:5}}
        labelName="Password"
        placeholder="**********"
        type={'password'}
        value={loginDetails.password}
        secure={!showPassword}
        onChange={(text) => setLoginDetails({ ...loginDetails, password: text })}
        />

        <View style={{...styles.container2, justifyContent:"space-between", width:"105%", marginVertical:20}}>
        <View style={styles.container2}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={()=>{
            setChecked(!checked);}}
            color="#91A0F6"
        />
        <Text>Remember Me</Text>
        </View>
        <Button mode="text" textColor="#91A0F6">
          Forgot Password?
        </Button>
        </View>
            <View style={{...styles.container2, marginVertical:10, gap: 35}}>

            <Pressable style={styles.button1}>
              <Text style={{color:"#fff", fontSize:22}}>Login</Text>
            </Pressable>

            <Pressable style={styles.button2}>
              <Google width={30} height={30}/>
              <Text style={{color:"#91A0F6", fontSize:22}}>Google</Text>
            </Pressable>
            
            </View>

            <View style={{marginVertical:10, display:"flex", flexDirection:"row", gap:2}}>
            <Text>Don't have an Account?</Text>
            <Button mode="text" textColor="#91A0F6">
          Register Now
        </Button>
            </View>
      </View>
     
    </Page>
  );
};
