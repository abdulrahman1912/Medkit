import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable,} from "react-native";
import {
  Page,
  Header,
  BackButton,
} from "../../../components";
import Hmedix from "../../../assets/images/pharmacy_hmedix.svg";
import Careplus from "../../../assets/images/pharmacy_careplus.svg";
import Divine from "../../../assets/images/pharmacy_divine.svg";
import Pinmap from "../../../assets/icons/pinmap.svg";
import Star from "../../../assets/icons/star.svg";
import Filledstar from "../../../assets/icons/filledstar.svg";
export const Pharmacy = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop: 30,
      paddingHorizontal: 20,
      height: 200,
      width: "100%",
      alignItems: "center",
    },

    pharm_container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#91A0F680",
      height: 120,
      width: "100%",
      borderRadius: 10,
      padding: 10,
      marginTop: 40,
    },

    text_container: {
      width: "100%",
      height: 100,
    },
  });

  return (
    <Page>
      <Header startIcon={<BackButton />} title={"Pharmaceutical Stores"} />
      <View style={styles.container}>
        <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 500 }}>
          Nearby Pharmaceutical Stores Found
        </Text>
        <Pressable  onPressIn={() => navigation.navigate('Hmedix')} style={{ ...styles.pharm_container, gap: 5 }}>
          <Hmedix />
          <View style={styles.text_container}>
            <Text style={{ fontSize: 20 }}>H-medix</Text>
            <Text style={{ fontSize: 17 }}>1st Avenue, Gwarimpa,</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 17}}>Abuja</Text>
              <Pinmap width={20} style={{ marginLeft: 5 }} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>4.0</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 3,
                  gap: 3,
                }}
              >
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Star height={20} />
              </View>
            </View>
          </View>
        </Pressable>

        <Pressable style={{ ...styles.pharm_container, marginTop: 25, gap: 5 }}>
          <Careplus />
          <View style={styles.text_container}>
            <Text style={{ fontSize: 20 }}>Care Plus</Text>
            <Text style={{ fontSize: 17 }}>5th Avenue, Gwarimpa,</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 17 }}>Abuja</Text>
              <Pinmap width={20} style={{ marginLeft: 5 }} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>3.0</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 3,
                  gap: 3,
                }}
              >
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Star height={20} />
                <Star height={20} />
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable style={{ ...styles.pharm_container, marginTop: 25, gap: 5 }}>
          <Divine />
          <View style={styles.text_container}>
            <Text style={{ fontSize: 20 }}>Divine Pharmacy</Text>
            <Text style={{ fontSize: 17 }}>3rd Avenue, Gwarimpa,</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontSize: 17 }}>Abuja</Text>
              <Pinmap width={20} style={{ marginLeft: 5 }} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text>3.0</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 3,
                  gap: 3,
                }}
              >
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Filledstar height={20} />
                <Star height={20} />
                <Star height={20} />
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </Page>
  );
};
