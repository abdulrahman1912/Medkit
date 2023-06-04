import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { Page, Header, BackButton, ProfileNavLink } from "../../../components";
import Fillprofile from "../../../assets/images/defaultpic.svg";
import Profilepic from "../../../assets/icons/account.svg";
import Pinmap from "../../../assets/icons/locatepin.svg";
import Payment from "../../../assets/icons/payment.svg";
import Settings from "../../../assets/icons/settings.svg";
import Logout from "../../../assets/icons/logout.svg";
export const Profile = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop: 15,
      paddingHorizontal: 20,
      height: 200,
      width: "100%",
      alignItems: "center",
    },
  });

  return (
    <Page>
      <Header
        startIcon={<BackButton navigation={navigation} />}
        title={"Account"}
      />
      <View style={styles.container}>
        <Fillprofile width={80} height={80} style={{ marginTop: 10 }} />
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 500 }}>
          Abdullahi Abdulrahman
        </Text>
        <View style={{ marginTop: 15 }}>
          <ProfileNavLink style={{paddingHorizontal:15, paddingTop:6 ,}} svg={<Profilepic />} text={"Edit profile"} />

          <ProfileNavLink style={{paddingHorizontal:15, paddingTop:6 ,}} svg={<Pinmap style={{marginTop:5, marginHorizontal:10}}/>} 
          text={"Edit profile"} 
          textStyle={{marginTop:4}}/>
        </View>
      </View>
    </Page>
  );
};
