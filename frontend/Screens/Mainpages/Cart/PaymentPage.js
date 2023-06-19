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
import { Checkbox } from "react-native-paper";
import {
  Smallbtn,
  Page,
  Header,
  SearchBar,
  BackButton,
  DrugCard1,
  Druglist1,
} from "../../../components";
import Paystack from "../../../assets/images/paystack.svg";
import Remita from "../../../assets/images/remita.svg";
export const PaymentPage = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
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

    payappbox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "60%",
      marginTop: 20,
    },

    payapp: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <View style={styles.container}>
          <View>
            <View>
              <Text style={{ fontSize: 16 }}>Payment Method</Text>
              <View style={styles.payappbox}>
                <View style={styles.payapp}>
                  <Paystack />
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    color="#91A0F6"
                  />
                </View>

                <View style={styles.payapp}>
                  <Remita />
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    color="#91A0F6"
                  />
                </View>
              </View>
              <View style={{marginHorizontal:10}}>
              <Pressable style={styles.button}>
                <Text style={{fontSize:18,color:"#fff", fontWeight:700}}>Confirm</Text>
              </Pressable>
            </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
