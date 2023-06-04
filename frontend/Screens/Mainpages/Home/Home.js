import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import {
  SearchBar,
  Slides,
  CustomCard,
  CardContent,
  MySlideComponent,
} from "../../../components";
import Avatar from "../../../assets/images/profileavatar.svg";
import Bellicon from "../../../assets/icons/bell.svg";
import Locatemed from "../../../assets/images/locateimage.svg";
import Hmedix from "../../../assets/images/hmedix.svg";
import Coartem from "../../../assets/medicine/coartem.svg";
import Palaxin from "../../../assets/medicine/palaxin.svg";
import Panadol from "../../../assets/medicine/panadol.svg";
import Robitussin from "../../../assets/medicine/robitussin.svg";
export const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      paddingHorizontal: 20,
      height: Dimensions.get("window").height,
      width: Dimensions.get("screen").width,
      backgroundColor: "#fff",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginTop: 20,
      width: "100%",
    },

    header2: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },

    card: {
      marginRight: 7,
      width: 267,
      padding: 17,
    },

    slide1: {
      marginHorizontal: 28,
      height: 300,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    subslide: {
      width: "80%",
      backgroundColor: "#E2E4EB",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    subview: {
      width: 200,
      height: 150,
      borderRadius: 10,
      marginBottom: 15,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
    slide2: {
      marginHorizontal: 28,
      height: 300,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    slide3: {
      marginHorizontal: 28,
      height: 300,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    description: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    spaceBetween: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    product: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
      gap: 10,
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
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 56, marginTop: 10, height: 200 }}
      >
        <View style={styles.header}>
          <View style={{ ...styles.header2, marginTop: 20 }}>
            <Avatar />
            <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 5 }}>
              Abdulrahman
            </Text>
          </View>

          <Pressable>
            <Bellicon style={{ marginTop: 20 }} />
          </Pressable>
        </View>

        <SearchBar style={{ marginTop: 20 }} />

        <Text style={{ marginTop: 20, fontSize: 15, fontWeight: 500 }}>
          Find pharmaceutical stores close to you
        </Text>
        <Pressable onPress={() => navigation.navigate('Location')}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Locatemed width={320} height={150} />
          </View>
        </Pressable>
        <View style={{ ...styles.spaceBetween }}>
          <Text style={{ fontSize: 16 }}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')} >
            <Text style={{color:"#5F77E1", textDecorationLine:"underline"}}>See all</Text>
          </TouchableOpacity>
        </View>
        <MySlideComponent>
          {
            <View style={{...styles.product, marginHorizontal:1}}>
              <View style={styles.product_item}>
                <View style={styles.item}>
                  <Panadol width={100} height={100} />
                </View>
                <Text style={{ ...styles.text, marginTop: 5 }}>Panadol</Text>
                <Text style={{ ...styles.text, fontSize: 10 }}>
                  Panadol is a tablet drug.
                </Text>
                <Text style={{ ...styles.text, fontSize: 10 }}>
                  Contains 20mg of Arthemefin.
                </Text>
              </View>
              <View style={styles.product_item}>
                <View style={styles.item}>
                  <Robitussin width={100} height={100} />
                </View>
                <Text style={{ ...styles.text, marginTop: 5 }}>Robitussin</Text>
                <Text style={{ ...styles.text, fontSize: 10 }}>
                  Robitussin is a tablet drug.
                </Text>
                <Text style={{ ...styles.text, fontSize: 10 }}>
                  Contains 20mg of Arthemefin.
                </Text>
              </View>
            </View>
          }
          {
            <View style={{...styles.product,marginLeft:20}}>
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
              </View>
              <View style={styles.product_item}>
                <View style={styles.item}>
                  <Palaxin width={100} height={120} />
                </View>
                <Text style={{ ...styles.text, marginTop: 5 }}>P-Alaxin</Text>
                <Text style={{ ...styles.text, fontSize: 10 }}>
                  P-Alaxin is a tablet drug.
                </Text>
                <Text style={{ ...styles.text, fontSize: 10 }}>
                  Contains 20mg of Arthemefin.
                </Text>
              </View>
            </View>
          }
        </MySlideComponent>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16 }}>Most Visited Pharmacy</Text>
          <View
            style={{
              ...styles.header2,
              marginTop: 5,
              backgroundColor: "#91A0F680",
              height: 200,
              width: "100%",
              borderRadius: 10,
              gap: 5,
            }}
          >
            <Hmedix width={"50%"} height={100} />
            <View>
              <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 5 }}>
                H-Medix
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}>
                Located in 1st avenue,{"\n"}Gwarimpa, Abuja
              </Text>
              <Text>
                Drugs available:{"\n"}Capsules, tablets, syrup,{"\n"}vitamins
                and more
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
