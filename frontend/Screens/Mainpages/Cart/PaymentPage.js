import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Smallbtn,
  Page,
  Header,
  SearchBar,
  BackButton,
  DrugCard1,
  Druglist1,
  CustomBtn
} from "../../../components";
import { cartatom } from "../../../jotai-store";
import { useAtom } from "jotai";
export const PaymentPage = ({ navigation }) => {
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
      display:'flex',
      
      
    },

    button: {
      backgroundColor: "#91A0F6",
      marginTop: 20,
      height: 50,
      width: "100%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
    },
  });
 const [card ] = useAtom(cartatom)
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10, }}
      >
        <View style={{...styles.container,height:Dimensions.get('screen').height
      }} >

            {Drugs}
            <Text style={{alignSelf:'baseline',color:'#5F77E1',marginVertical:20,marginLeft:80,fontSize:20}}>Medicine feee: 14500</Text>
            <CustomBtn >
              Check out
            </CustomBtn>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};
