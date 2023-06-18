import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  Page,
  Header,
  BackButton,
  Alert,
  ScreenBtn,
} from "../../../../components";
import Comart from "../../../../assets/medicine/comart.svg";
import Addcart from "../../../../assets/icons/addcart.svg";
import Illustrate from "../../../../assets/illustrations/addedtocart.svg";
export const Productdetail= ({ navigation }) => {
  const [alert, setAlert] = useState(false);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderRadius: 50,
      marginTop: 40,
      height: "90%",
      width: "100%",
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 10,
    },

    button: {
      backgroundColor: "#91A0F6",
      marginTop: 81,
      height: 55,
      width: "90%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
    },

    alertbtn:{
      backgroundColor: "#91A0F6",
      marginTop: 15,
      height: 55,
      width: "100%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    }
  });

  return (
    <Page>
      <Header startIcon={<BackButton />} title={"Product details"} />
      <View style={styles.container}>
        <Comart />
        <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 600 }}>
          Co-Mart
        </Text>
        <Text style={{ marginTop: 15, fontSize: 16, lineHeight: 22 }}>
          Co-Mart is a combination drug used to treat uncomplicated malaria
          caused by the Plasmodium falciparum parasite. It contains Artemether
          and Lumefantrine and is taken orally in tablet form. Co-Mart is
          usually administered orally in the form of tablets and is typically
          taken twice daily for a specified duration, as prescribed by a
          healthcare professional.
        </Text>

        <Pressable onPress={() => setAlert(true)} style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: 700 }}>
            Add to Cart
          </Text>
          <Addcart />
        </Pressable>
      </View>

   

      <Alert isOpen={alert} onDismiss={() => setAlert(false)}>
        <Text style={{ fontSize: 18, textAlign: "center", lineHeight: 25 }}>
          Your medicine has been added to the cart successfully
        </Text>
        <Illustrate width={300} />
        <View style={{marginHorizontal:5}}>
        <Pressable onPress={() => navigation.navigate('Cart')} style={styles.alertbtn}>
        <Text style={{color:"#FFF", fontSize:18, fontWeight:700}}>Continue</Text>
        </Pressable>
        </View>
       
      </Alert>
    </Page>
  );
};
