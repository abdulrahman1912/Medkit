import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Smallbtn,
  Page,
  Header,
  SearchBar,
  BackButton,
  DrugCard,
  Druglist
} from "../../../../components";
import Bell from "../../../../assets/icons/bell.svg";
import Heart from "../../../../assets/icons/heart.svg";
import Upload from "../../../../assets/icons/upload.svg";
import Amatem from "../../../../assets/medicine/amatem.svg";
import Coartem from "../../../../assets/medicine/coartem.svg";
import Comart from "../../../../assets/medicine/comart.svg";
import Plaquenil from "../../../../assets/medicine/plaquenil.svg";
import Palaxin from "../../../../assets/medicine/palaxin.svg";
import Artequick from "../../../../assets/medicine/artequick.svg";
export const HmedixPage = ({ navigation }) => {
  const styles = StyleSheet.create({
    safeArea: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#91A0F6",
      height: "100%",
      paddingTop: 10,
      justifyContent: "center",
    },

    container: {
      backgroundColor: "#fff",
      padding: 20,
      width: "100%",
      textAlign: "left",
     
      
    },

    product: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginTop: 30,
      gap:12
    },

    product_item: {
      width: 155,
      height: 200,
      backgroundColor: "#E2E4EB",
      alignItems: "center",
      paddingTop: 5,
      borderRadius: 10,
    },

    item: {
      marginTop: 5,
      backgroundColor: "#FFFFFF",
      width: 120,
      height: 110,
      borderRadius: 10,
      alignItems: "center",
    },

    text: {
      alignSelf: "flex-start",
    },

    button: {
      backgroundColor: "#91A0F6",
      marginTop: 3,
      height: 12,
      width: 25,
      borderRadius: 20,
      alignItems: "center",
    },
   
  });

  const Drugs = Druglist.map(({id,drug,price,text1,text2})=>{
    return(
      <DrugCard key={id} drug={drug} price={price} text1={text1} text2={text2} navigation={navigation}/>
    )
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header startIcon={<BackButton />} title={"Anti-malaria"} />
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: 17,
          fontWeight: 700,
          marginTop: 20,
        }}
      >
        H-medix
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <View style={styles.container}>
          <SearchBar />
          <View style={styles.product}>
            <View style={styles.left}>
            {Drugs}
            </View>
            <View style={styles.right}>
            {Drugs}
            </View>
          </View>
         
        </View>
       

      </ScrollView>
    </SafeAreaView>
  );
};
