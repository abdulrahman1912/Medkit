import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import Comart from "../../assets/medicine/comart.svg";
import Bell from "../../assets/icons/bell.svg";
import Heart from "../../assets/icons/heart.svg";
import Upload from "../../assets/icons/upload.svg";
import { cartatom } from "../../jotai-store";
import { useAtom } from "jotai";

const styles = StyleSheet.create({
  imgcontainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "column",
  },
  safeArea: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#91A0F6",
    height: "100%",
    justifyContent: "center",
  },

  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    height: 1000,
    width: "100%",
    textAlign: "left",
  },

  containerflex:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:35
  },

  product: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },

  product_item: {
    width: 155,
    backgroundColor: "#E2E4EB",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
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

export const CustomCard1 = ({ children, style, ...props }) => {
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: "#E2E4EB",
        padding: 8,
        ...style,
      }}
    >
      {children}
    </Pressable>
  );
};

export const CardContent1 = ({ src, style, title }) => {
  return (
    <>
      <View style={{ ...style }}>
        <Image source={src} style={{ ...style }} />
        <Text>{title}</Text>
      </View>
    </>
  );
};

export const DrugCard1 = ({ drug, price, text1, text2, navigation }) => {
  const [cart, setCart] = useAtom(cartatom);

  function addToCart() {
    setCart([...cart, { drug, price, text1, text2 }]);
    navigation.navigate("Productdetail");
  }
  return (
    <>
    <View style={styles.containerflex}>
      <View style={styles.product_item}>
        <View style={styles.item}>
          <Comart width={100} height={100} />
        </View>
      </View>

      <View>
        <Text style={{ ...styles.text, marginTop: 5 }}>{drug}</Text>
        <Text style={{ ...styles.text, fontSize: 10 }}>{text1}</Text>
        <Text style={{ ...styles.text, fontSize: 10 }}>{text2}</Text>
        <Text style={{fontSize: 10, color: "#5F77E1", fontWeight: "600", marginTop:5}}>{price}</Text>
      </View>

      </View>
    </>
  );
};

export const Druglist1 = [
  {
    id: 1,
    drug: "Coartem",
    price: "₦" + 1200,
    text1: "coartem is a tablet drug",
    text2: "contains 20g of artemether",
  },
  {
    id: 2,
    drug: "Ibuprofen",
    price: "₦"+250,
    text1: 'ibuprofen is a nonsteroidal\nanti-inflammatory drug',
    text2: "commonly used to relieve pain\nand reduce inflammation",
},
  {
    id: 3,
    drug: "Ibuprofen",
    price: "₦"+250,
    text1: 'ibuprofen is a nonsteroidal\nanti-inflammatory drug',
    text2: "commonly used to relieve pain\nand reduce inflammation",
},





];
