import { StyleSheet, Text, View } from "react-native";
import { Page} from "../../components";
import Vector from "../../assets/illustrations/vector1.svg";
import Image from "../../assets/images/Medkit-logo.svg";
import { CustomBtn, CustomBtnLight } from "../../components/Button/button";

export const Getstarted = ({ navigation }) => {
    const styles = StyleSheet.create({

       container:{
        backgroundColor:"#fff",
        borderRadius:20,
        marginTop:30,
        height:"40%",
        width:"100%",
        paddingHorizontal: 20,
        alignItems:"center",
        paddingTop:20, 
       },

       text:{
        marginTop:10,
        color: "#fff",
        fontSize: 22,
        fontWeight:400
       },

    })

    return(
        <Page>
            <Vector width="120%" height="30%"/>
            <Image width="100%" height="25%"/>
            <Text style={styles.text}>Just A Click Away To Get Started</Text>
      
            <View style={styles.container}>
            <CustomBtn>Register</CustomBtn>
            <CustomBtnLight>Login</CustomBtnLight>
            
            </View>
        </Page>
    )
}