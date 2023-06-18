import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable,  } from "react-native";
import { Page, Header, BackButton, ProfileNavLink, Alert } from "../../../components";
import Fillprofile from "../../../assets/images/defaultpic.svg";
import Profilepic from "../../../assets/icons/account.svg";
import Pinmap from "../../../assets/icons/locatepin.svg";
import Payment from "../../../assets/icons/payment.svg";
import Settings from "../../../assets/icons/settings.svg";
import Logout from "../../../assets/icons/logout.svg";
import Exit from "../../../assets/illustrations/exit.svg";
export const Profile = ({ navigation }) => {
  const [alert, setAlert] = useState(false);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      marginTop: 15,
      paddingHorizontal: 20,
      height: 800,
      width: "100%",
      alignItems: "center",
    },

    alertbtnyes:{
      backgroundColor: "#91A0F6",
      marginTop: 15,
      height: 55,
      width: "40%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    alertbtnno:{
      borderColor: "#91A0F6",
      borderWidth:2,
      marginTop: 15,
      height: 55,
      width: "40%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    }
  });

  return (
    <Page>
      <Header
        startIcon={<BackButton navigation={navigation} />}
        title={"Account"}
      />
        <View style={styles.container}>
          <Fillprofile width={80} height={80} style={{ marginTop: 15 }} />
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 500 }}>
            Abdullahi Abdulrahman
          </Text>
          <View style={{ marginTop: 10 }}>
            <ProfileNavLink
              style={{ paddingHorizontal: 15, paddingTop: 6 }}
              svg={<Profilepic />}
              text={"Profile"}
            />

            <ProfileNavLink
              style={{ paddingHorizontal: 15, paddingTop: 6 }}
              svg={<Pinmap style={{ marginTop: 5, marginHorizontal: 10 }} />}
              text={"Address"}
              textStyle={{ marginTop: 4 }}
            />

            <ProfileNavLink
              style={{ paddingHorizontal: 15, paddingTop: 6 }}
              svg={<Payment style={{ marginTop: 5, marginHorizontal: 5 }} />}
              text={"Payment"}
              textStyle={{ marginTop: 4 }}
            />

            <ProfileNavLink
              style={{ paddingHorizontal: 15, paddingTop: 6 }}
              svg={<Settings style={{ marginTop: 5, marginHorizontal: 5 }} />}
              text={"Settings"}
              textStyle={{ marginTop: 4 }}
            />

            <ProfileNavLink
              onPress={() => setAlert(true)}
              style={{ paddingHorizontal: 15, paddingTop: 6 }}
              svg={<Logout style={{ marginTop: 5, marginHorizontal: 2 }} />}
              text={"Log out"}
              textStyle={{ marginTop: 4 }}
            />
          </View>
        </View>
        
        <Alert isOpen={alert} onDismiss={() => setAlert(false)} >
        <Text style={{ fontSize: 18, textAlign: "center", lineHeight: 25 }}>
          Do you wish to Exit Medkit?
        </Text>
        <Exit width={280} height={250} />
        <View style={{marginHorizontal:5, display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"row", gap:35}}>
        <Pressable onPress={() => navigation.navigate('Login')} style={styles.alertbtnyes}>
        <Text style={{color:"#FFF", fontSize:18, fontWeight:700}}>Yes</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile')} style={styles.alertbtnno}>
        <Text style={{color:"#91A0F6", fontSize:18, fontWeight:700}}>No</Text>
        </Pressable>
        </View>
       
      </Alert>
    </Page>
  );
};
