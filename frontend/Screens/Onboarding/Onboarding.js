import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Firstblubb from "../../assets/illustrations/blubb1.svg";
import Secondblubb from "../../assets/illustrations/blubb2.svg";
import Thirdblubb from "../../assets/illustrations/blubb3.svg";
import Fourthblubb from "../../assets/illustrations/blubb4.svg";
import Illustration from "../../assets/illustrations/undraw_location_search_re_ttoj 1.svg";
import Illustration2 from "../../assets/illustrations/undraw_order_delivered_re_v4ab 1.svg";
import Illustration3 from "../../assets/illustrations/undraw_medical_care_movn 1.svg";


export const Onboarding = ({navigation}) => {
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  text: {
    paddingTop: 10,
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});


    return (
      <Swiper style={styles.wrapper} activeDotColor="#000" dotColor="#fff">
        <View style={styles.slide1}>
          <Firstblubb width="100%" height="23%" />
          <Illustration width="100%" height="38%" />
          <Text style={styles.text}>LOCATE THE NEAREST</Text>
          <Text style={{ ...styles.text1, color: "#5F77E1" }}>
            PHARMACEUTICAL STORES
          </Text>
          <Secondblubb width="100%" height="30%" />
        </View>
        <View style={styles.slide2}>
          <Thirdblubb width="100%" height="35%" />
          <Illustration2 width="100%" height="30%" />
          <Text style={styles.text1}>
            HAVE YOUR <Text style={{ color: "#5F77E1" }}>DRUGS DELIVERED</Text>{" "}
            AT YOUR DOOR STEP
          </Text>
          <Secondblubb width="100%" height="30%" />
        </View>
        <View style={styles.slide3}>
          <Fourthblubb width="100%" height="37%"/>
          <Illustration3 width="100%" height="28%"/>
          <Text style={styles.text1}>
            NO <Text style={{ color: "#5F77E1" }}>FAKE DRUGS</Text>
          </Text>
          <Text style={styles.text1}>LICENSED PHARMACISTS</Text>
          <Secondblubb width="100%" height="35%"/>
        </View>
      </Swiper>
    );
  }