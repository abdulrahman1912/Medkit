import { React, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView ,Image} from "react-native";
import { Page, Input, ScreenBtn } from "../../components";
import DropDownPicker from "react-native-dropdown-picker";
import Toast  from "react-native-toast-message";
import {
  ImagePickerAsset,
  ImagePickerOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";



function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

export const Fillprofile = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderRadius: 50,
      marginTop: 30,
      height: "100%",
      width: "100%",
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 10,
    },

    imgcontainer: {
      zIndex: 100,
      marginTop: 15,
    },

    dropdown: {
      marginTop: 2,
      backgroundColor: "#E2E4EB",
      borderRadius: 25,
      height: 55,
      borderWidth: 0.5,
      borderColor:"#fff"
    },
  });
  function getRandomElement(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
  const maleHairstyles = ['short03', 'short07', 'short08', 'short14'];
  const femaleHairstyles = ['long06', 'long09', 'long12', 'long18'];
    const avatarUrl = `https://api.dicebear.com/5.x/adventurer/png?seed=${"F"}&backgroundColor=b6e3f4,c0aede,d1df49&hair=${'long06'}`

  return (
    <Page>
      <Image style={{ width: 131, height: 131, borderRadius: 25,...styles.imgcontainer }} source={{uri:avatarUrl}} />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 15,
            paddingTop: 15,
            fontWeight: 400,
            marginBottom: 10,
          }}
        >
          Please fill in your details
        </Text>
        <Input labelName="Username" placeholder="Enter your Username" />
        <Input
          labelName="Phone Number"
          placeholder="Enter your Phone Number"
          type="telephoneNumber"
          keyboardType={"numeric"}
          style={{ paddingTop: 2 }}
        />
        <Input
          labelName="Date of Birth"
          startIcon={"calendar-outline"}
          placeholder="Enter your DOB"
          style={{ paddingTop: 2 }}
        />

        <View style={{ marginTop: 12 }}>
          <Text style={{ color: "#615B5B" }}>Gender</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Gender"
            placeholderStyle={{ color: "#00000080" }}
          />
        </View>

        <ScreenBtn onPress={() => navigation.navigate('Login')} style={{marginVertical:30}}>Continue</ScreenBtn>
      </View>
    </Page>
  );
};
