import {React, useState} from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {Button} from "react-native-paper";
import { Page, Input} from "../../components";
import Image from "../../assets/images/Medkit-logo.svg";
import Google from "../../assets/icons/google.svg";



export const Register = ({ navigation }) => {
  
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    type: ""
})
const [showPassword] = useState(false);


  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderRadius: 50,
      marginTop: 10,
      height: "100%",
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

    container3:{
      display:"flex",
      justifyContent:"center",
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
      
    <Text style={{fontSize:50,fontWeight:700, color:"#fff", marginLeft:15}}>MEDKIT</Text>
      <View style={styles.container}>
        <Text style={{fontSize:25,}}>Register</Text>
        <Text style={{marginTop:10, color:"#615B5B"}}>Please fill in your details</Text>
       
        <Input
        labelName="Full Name"
        placeholder="Enter your Full Name"
        />

        <Input
        labelName="Email"
        placeholder="Enter your email"
        style={{paddingTop:2}}
        />

        <Input
        labelName="Password"
        placeholder="Enter your password"
        secureTextEntry={true}
        style={{paddingTop:2}}
        />
          <Input
        labelName="Confirm Password"
        placeholder="Enter your password"
        secureTextEntry={true}
        style={{paddingTop:2}}
        />

      
            <View style={{...styles.container2, marginVertical:25, gap: 35}}>

            <Pressable style={styles.button1}>
              <Text style={{color:"#fff", fontSize:22}}>Sign Up</Text>
              
            </Pressable>

            <Pressable style={styles.button2}>
              <Google width={30} height={30}/>
              <Text style={{color:"#91A0F6", fontSize:22}}>Google</Text>
            </Pressable>
            
            </View>

            <View style={{...styles.container3, gap:-10, }}>
            <View style={{ display:"flex", flexDirection:"row"}}>
            <Text>Already have an account?</Text>
            </View>
            <Button mode="text" textColor="#91A0F6" onPress={() => navigation.navigate('Login')} >
          Login
        </Button>
      </View>
      </View>
     
    </Page>
  );
};
