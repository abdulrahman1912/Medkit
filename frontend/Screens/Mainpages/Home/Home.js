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
import Avatar from "../../../assets/images/profileavatar.svg";
import Bellicon from "../../../assets/icons/bell.svg";

import { SearchBar } from "../../../components";

export const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      position: "relative",
      alignItems: "center",
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
      marginTop: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header2}>
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
      <Text>
        
      </Text>
    </SafeAreaView>
  );
};
