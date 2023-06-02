import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ScreenBtn1, Header, BackButton } from "../../../components";
import Checklist from "../../../assets/illustrations/checklist.svg";
export const Categories = ({ navigation }) => {
  const styles = StyleSheet.create({
    safeArea: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#91A0F6",
      height: "100%",
      paddingTop: 10,
    },
    container: {
      backgroundColor: "#fff",
      marginTop: 10,
      paddingHorizontal: 20,
      height: 1000,
      width: "100%",
    },

    text: {
      fontSize: 20,
      fontWeight: 400,
    },

    button:{
        alignSelf:"flex-start"
    },
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header startIcon={<BackButton />} title={"Categories"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop:10, paddingTop:10 }}
      >
        <View style={styles.container}>
          <Checklist height={250} width={270} />
          <Text style={styles.text}>
            We made sure to categorize our drugs with the pharmacy standard for
            easy accessibility
          </Text>

            <View style={{display: "flex", flexDirection:"column",alignItems:"flex-start"}}>
            <ScreenBtn1 width={"40%"}>Anti-fungal</ScreenBtn1>
          <ScreenBtn1 width={"45%"}>Anti-bacteria</ScreenBtn1>
          <ScreenBtn1 width={"50%"}>Anti-depressant</ScreenBtn1>
          <ScreenBtn1 width={"60%"}>Anti-hypertensive</ScreenBtn1>
          <ScreenBtn1 onPress={() => navigation.navigate('Antimalaria')} width={"40%"}>Anti-malaria</ScreenBtn1>
          <ScreenBtn1 width={"40%"}>Syrup</ScreenBtn1>
          <ScreenBtn1 width={"40%"}>Tablets</ScreenBtn1>
          <ScreenBtn1 width={"40%"}>Vitamins</ScreenBtn1>
          
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
