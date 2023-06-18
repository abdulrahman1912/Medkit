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
  DrugCard1,
  Druglist1,
} from "../../../components";
import Checkout from "../../../assets/icons/checkout.svg";
export const Cart = ({ navigation }) => {
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
      flexDirection: "column",
      width: "100%",
      marginTop: 5,
    },

    product_item: {
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

    total:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        marginTop: 20,
        
    },

    text: {
      alignSelf: "flex-start",
    },

    button: {
      backgroundColor: "#91A0F6",
      marginTop: 20,
      height: 50,
      width: "100%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent:"center",
      display:"flex",
      flexDirection:"row"

    },
  });

  const Drugs = Druglist1.map(({ id, drug, price, text1, text2 }) => {
    return (
      <DrugCard1
        key={id}
        drug={drug}
        price={price}
        text1={text1}
        text2={text2}
        navigation={navigation}
      />
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header startIcon={<BackButton />} title={"Cart"} />
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
          <View>
            <View>{Drugs}</View>
            <View>{Drugs}</View>

            <View style={styles.total}>
                <Text style={{fontSize:16, color:"#5F77E1", fontWeight:"500"}}>Medicine Fee:</Text>
                <Text style={{fontSize:16, color:"#5F77E1", fontWeight:"500"}}>{}</Text>
            </View>

            <View style={{marginHorizontal:10}}>
              <Pressable style={styles.button}>
                <Text style={{fontSize:18,color:"#fff", fontWeight:700}}>Checkout </Text>
                <Checkout style={{width:"20"}}/>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
