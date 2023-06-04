import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Header,
  SearchBar,
  BackButton,
} from "../../../../components";
import Heart from "../../../../assets/icons/heart.svg";
import Upload from "../../../../assets/icons/upload.svg";
import Amatem from "../../../../assets/medicine/amatem.svg";
import Coartem from "../../../../assets/medicine/coartem.svg";
import Comart from "../../../../assets/medicine/comart.svg";
import Plaquenil from "../../../../assets/medicine/plaquenil.svg";
import Palaxin from "../../../../assets/medicine/palaxin.svg";
import Artequick from "../../../../assets/medicine/artequick.svg";
export const Antimalaria = ({ navigation }) => {
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
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
      paddingTop: 20,
      height: 1000,
      width: "100%",
      textAlign: "left",
    },

    product: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 30,
    },

    product_item: {
      width: 155,
      height: 200,
      backgroundColor: "#E2E4EB",
      alignItems: "center",
      paddingHorizontal: 10,
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header startIcon={<BackButton navigation={navigation} />} title={'Anti-malaria'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <View style={styles.container}>
          <SearchBar />
          <View style={styles.product}>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Comart width={100} height={100} />
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>Co-Mart</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Co-Mart is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 38,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600" }}
                >
                  ₦1,200.00
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap:12 }}>
                  <Heart />
                  <TouchableOpacity onPress={""} style={styles.button}>
                    <Text
                      style={{
                        fontSize: 7,
                        fontWeight: "700",
                        color: "#FFFFFF",
                      }}
                    >
                      Buy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Palaxin width={100} height={120}/>
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>P-Alaxin</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                P-Alaxin is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 20,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600", }}
                >
                  ₦1,500.00
                </Text>
                <View style={{display:"flex", flexDirection:"row",gap:10 }}>
                <Heart/>
                <Upload/>
                <TouchableOpacity onPress={''} style={styles.button}>
                <Text style={{fontSize:7, fontWeight:"700", color:"#FFFFFF",}}>Buy</Text>
                </TouchableOpacity>
                </View>
               
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Coartem width={100} height={100} />
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>Coartem</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Coartem is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 38,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600" }}
                >
                  ₦2,300.00
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap:12 }}>
                  <Heart />
                  <TouchableOpacity onPress={""} style={styles.button}>
                    <Text
                      style={{
                        fontSize: 7,
                        fontWeight: "700",
                        color: "#FFFFFF",
                      }}
                    >
                      Buy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Amatem width={100} height={120}/>
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>Amatem</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Amatem is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 20,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600", }}
                >
                  ₦1,800.00
                </Text>
                <View style={{display:"flex", flexDirection:"row",gap:10 }}>
                <Heart/>
                <Upload/>
                <TouchableOpacity onPress={''} style={styles.button}>
                <Text style={{fontSize:7, fontWeight:"700", color:"#FFFFFF",}}>Buy</Text>
                </TouchableOpacity>
                </View>
               
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Artequick width={100} height={100} />
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>Artequick</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Artequick is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 38,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600" }}
                >
                  ₦1,500.00
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap:12 }}>
                  <Heart />
                  <TouchableOpacity onPress={""} style={styles.button}>
                    <Text
                      style={{
                        fontSize: 7,
                        fontWeight: "700",
                        color: "#FFFFFF",
                      }}
                    >
                      Buy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Plaquenil width={115} height={90}/>
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>Plaquenil</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Plaquenil is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 20,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600", }}
                >
                  ₦1,500.00
                </Text>
                <View style={{display:"flex", flexDirection:"row",gap:10 }}>
                <Heart/>
                <Upload/>
                <TouchableOpacity onPress={''} style={styles.button}>
                <Text style={{fontSize:7, fontWeight:"700", color:"#FFFFFF",}}>Buy</Text>
                </TouchableOpacity>
                </View>
               
              </View>
            </View>
          </View>
          <View style={styles.product}>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Comart width={100} height={100} />
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>Co-Mart</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Co-Mart is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 38,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600" }}
                >
                  ₦1,200.00
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap:12 }}>
                  <Heart />
                  <TouchableOpacity onPress={""} style={styles.button}>
                    <Text
                      style={{
                        fontSize: 7,
                        fontWeight: "700",
                        color: "#FFFFFF",
                      }}
                    >
                      Buy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.product_item}>
              <View style={styles.item}>
                <Palaxin width={100} height={120}/>
              </View>
              <Text style={{ ...styles.text, marginTop: 5 }}>P-Alaxin</Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                P-Alaxin is a tablet drug.
              </Text>
              <Text style={{ ...styles.text, fontSize: 10 }}>
                Contains 20mg of Arthemefin.
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "row",
                  marginTop: 5,
                  gap: 20,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600", }}
                >
                  ₦1,500.00
                </Text>
                <View style={{display:"flex", flexDirection:"row",gap:10 }}>
                <Heart/>
                <Upload/>
                <TouchableOpacity onPress={''} style={styles.button}>
                <Text style={{fontSize:7, fontWeight:"700", color:"#FFFFFF",}}>Buy</Text>
                </TouchableOpacity>
                </View>
               
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
