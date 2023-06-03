import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Page, Header, BackButton, Alert } from "../../../../../../components";
import Palaxin from "../../../../../../assets/medicine/palaxin.svg";
import Loading from "../../../../../../assets/illustrations/loading.svg";
import Upload from "../../../../../../assets/icons/camera.svg";
export const Productpalaxin = ({ navigation }) => {
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
      marginTop: 45,
      height: 55,
      width: "90%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
      gap:5
    },

    alertbtn: {
      backgroundColor: "#91A0F6",
      marginTop: 15,
      height: 55,
      width: "100%",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <Page>
      <Header startIcon={<BackButton />} title={"Product details"} />
      <View style={styles.container}>
        <Palaxin width={120} height={150} />
        <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 600 }}>
        P-Alaxin
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, lineHeight: 22, }}>
          P-Alaxin is an antimalarial medication used for the treatment of
          uncomplicated malaria caused by the Plasmodium falciparum parasite. It
          contains a combination of two active ingredients, namely
          Dihydroartemisinin and Piperaquine. P-Alaxin is typically taken orally
          in tablet form and is prescribed by healthcare professionals.
        </Text>

        <Pressable onPress={() => setAlert(true)} style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: 700 }}>
            Upload Prescription
          </Text>
          <Upload/>
        </Pressable>
      </View>

      <Alert isOpen={alert} onDismiss={() => setAlert(false)}>
        <Text style={{ fontSize: 18, textAlign: "center", lineHeight: 25 }}>
          Do kindly wait for the approval of the medicine prescription
        </Text>
        <Loading style={{alignSelf:"center"}} width={190} height={320} />
      </Alert>
    </Page>
  );
};
