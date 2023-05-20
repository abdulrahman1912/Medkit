import { React, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
   marginVertical:5
  },

  label: {
    color: "#615B5B",
    fontSize: 14,
    marginVertical: 5,
  },

  inputContainer: {
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 16,
    borderWidth: 0.1,
    marginTop: 3,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#E2E4EB",
    color: "000000",
  },
});

export const Input = ({
  labelName,
  startIcon,
  endIcon,
  secure,
  password,
  style,
  type,
  styleIcon,
  onChange,
  value,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={[styles.inputView, style]}>
      <Text style={styles.label}>{labelName}</Text>
      <View style={[styles.inputContainer]}>
      <MaterialCommunityIcons name={startIcon} style={{marginRight:8, fontSize:24}} />
        <TextInput
          secureTextEntry={secure}
          autoCorrect={false}
          keyboardType={type}
          onChangeText={onChange}
          value={value}
          {...props}
        />
      </View>
    </View>
  );
};

Input.defaultProps = {
  'isNumeric': false
}