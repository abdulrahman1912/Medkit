import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Checkbox, Button ,IconButton} from "react-native-paper";
import { Page, Input } from "../../components";
import Image from "../../assets/images/Medkit-logo.svg";
import Google from "../../assets/icons/google.svg";
import api from "../../api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Login = ({ navigation }) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    type: "",
  });

  const [showPassword,setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const[email,setEmail] = useState()

  const toogleRememberMer = async () => {
    const mail = await AsyncStorage.getItem('Login');
    mail != null?setChecked(true):setChecked(false)
    setEmail(mail)
   
  }
  toogleRememberMer()
  
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

    container2: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },

    container3: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },

    imgcontainer: {
      zIndex: 100,
      marginTop: 30,
    },

    textstyle: {
      textAlign: "left",
    },

    inputcontainer: {
      marginTop: 30,
    },

    button1: {
      display: "flex",
      width: "45%",
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#91A0F6",
      borderRadius: 10,
    },
    button2: {
      display: "flex",
      width: "45%",
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      gap: 10,
      borderColor: "#91A0F6",
      borderWidth: 1,
      borderRadius: 10,
    },
  });
  const moveToNextPage = async () => {
    try {
      if (checked) {
        await AsyncStorage.setItem("Login", loginDetails.email);
      } else {
        await AsyncStorage.setItem("Login", null);
      }
    } catch (e) {
      console.log(e);
    }

    await api
      .post("/login", loginDetails)
      .then(() => {
        return Toast.show({
          type: "success",
          text1: "login successful",
          position: "top",
          autoHide: true,
        });
      })
      .catch(() => {
        return Toast.show({
          type: "error",
          text1: "Incorrect email or password",
          position: "top",
          autoHide: true,
        });
      });
    navigation.navigate("Tabs");
  };

  return (
    <Page>
      <Image style={styles.imgcontainer} width="100%" height="15%" />
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>Sign In</Text>
        <Text style={{ marginTop: 10, color: "#615B5B" }}>
          Please fill in your details
        </Text>
        <Input
          labelName="Email"
          placeholder="Enter your email"
          value={email != null ?email:loginDetails.email}
          onChange={(text) => setLoginDetails({ ...loginDetails, email: text })}
        />
        <Input
          labelName="Password"
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          style={{ paddingTop: 15 }}
          
          onChange={(text) =>
            setLoginDetails({ ...loginDetails, password: text })
          }
          right={
            <IconButton
              iconColor={'black'}
              onPress={() => setShowPassword(!showPassword)}
              size={22}
              style={{ paddingRight: 15, borderRadius: 0, position: "relative" }}
              icon={showPassword ? "eye-outline" : "eye-off-outline"}
            />
        }
    
        />
        <View
          style={{
            ...styles.container2,
            justifyContent: "space-between",
            width: "105%",
            marginVertical: 20,
          }}
        >
          <View style={styles.container2}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
              
              color="#91A0F6"
            />
            <Text>Remember Me</Text>
          </View>
          <Button
            mode="text"
            textColor="#91A0F6"
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot Password?
          </Button>
        </View>
        <View style={{ ...styles.container2, marginVertical: 10, gap: 35 }}>
          <Pressable style={styles.button1} onPress={moveToNextPage}>
            <Text style={{ color: "#fff", fontSize: 22 }}>Login</Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Google width={30} height={30} />
            <Text style={{ color: "#91A0F6", fontSize: 22 }}>Google</Text>
          </Pressable>
        </View>
        <View style={{ ...styles.container3, gap: -10, marginVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>Don't have an Account?</Text>
          </View>
          <Button
            mode="text"
            textColor="#91A0F6"
            onPress={() => navigation.navigate("Register")}
          >
            Register Now
          </Button>
        </View>
      </View>
    </Page>
  );
};
