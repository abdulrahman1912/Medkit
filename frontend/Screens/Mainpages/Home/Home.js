import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "react-native-paper";
import {
  SearchBar,
  Slides,
  CustomCard,
  CardContent,
  MySlideComponent
} from "../../../components";
import Avatar from "../../../assets/images/profileavatar.svg";
import Bellicon from "../../../assets/icons/bell.svg";
import Locatemed from "../../../assets/images/locateimage.svg";
import Hmedix from "../../../assets/images/hmedix.svg";
import Panadol from "../../../assets/medicine/panadol.svg";
import Robitussin from "../../../assets/medicine/robitussin.svg";
export const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const styles = StyleSheet.create({
    container: {
      height: "100%",
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 20, marginTop: 10 }}>
        <View style={styles.header}>
          <View style={{ ...styles.header2, marginTop: 20, }}>
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
        <Pressable>
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
        {/* slide for medicine category  */}
        {/* <View style={{ ...styles.header, marginTop: 12 }}>
          <Text style={{ fontSize: 19, fontWeight: 500 }}>Category</Text>
          <Button mode="text" textColor="#91A0F6" style={{ marginTop: 2 }}>
            See all
          </Button>
        </View>

        <Swiper
          style={{ flex:1, height:600, marginTop: 10 }}
          activeDotColor="#fff"
          dotColor="#fff"
        >
          <View style={[styles.slide1, styles.subslide]}>
            <View {...styles.subview}>
              <Panadol />
            </View>
            <View style={{paddingHorizontal:12}}>
            <Text style={{fontSize:16, fontWeight:500, textAlign: "auto"}}>
              Panadol Tablets available in sachets and packs. Helps relieve body
              pains and headache.
            </Text>
            </View>
            
          </View>
          <View style={[styles.slide2, styles.subslide]}>
          <View {...styles.subview}>
              <Robitussin />
            </View>
            <View style={{paddingHorizontal:12}}>
            <Text style={{fontSize:16, fontWeight:500, textAlign: "auto"}}>
            Robitussin comes in bottles. Helps relieve running nose and cough. For young and adults.
            </Text>
            </View>
            
          </View>

          <View style={[styles.slide3, styles.subslide]}>
          <View {...styles.subview}>
              <Panadol />
            </View>
            <View style={{paddingHorizontal:12}}>
            <Text style={{fontSize:16, fontWeight:500, textAlign: "auto"}}>
              Panadol Tablets available in sachets and packs. Helps relieve body
              pains and headache.
            </Text>
            </View>
            
          </View>
        </Swiper> */}

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16, }}>Most Visited Pharmacy</Text>
          <View style={{ ...styles.header2, marginTop: 5, backgroundColor: "#91A0F680", height: 200, width: "100%", borderRadius: 10, gap: 5 }}>
            <Hmedix width={"50%"} height={100} />
            <View>
              <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 5 }}>H-Medix</Text>
              <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}>Located in 1st avenue,{'\n'}Gwarimpa, Abuja</Text>
              <Text>Drugs available:{'\n'}Capsules, tablets, syrup,{'\n'}vitamins and more</Text>
            </View>

          </View>
        </View>
        <View style={{ ...styles.spaceBetween, marginBottom: 20 }}>
          <Text style={{ fontSize: 16, }}>Categories</Text>
          <Text style={{ color: '#91A0F680', textDecorationLine: "underline" }}>View all</Text>
        </View>
        <MySlideComponent>
          {/**put your slide children here */}

        </MySlideComponent>

      </ScrollView>
    </SafeAreaView>
  );
};
