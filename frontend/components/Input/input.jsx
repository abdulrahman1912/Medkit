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
    marginVertical: 5
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
  maxLength,
  right,
  ...props
  

}) => {
  const [isFocused, setIsFocused] = useState(true);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={[styles.inputView, style]}>
      <Text style={styles.label}>{labelName}</Text>
      <View style={[styles.inputContainer]}>
        
        <TextInput
          secureTextEntry={secure}
          autoCorrect={false}
          keyboardType={type}
          onChangeText={onChange}
          maxLength={maxLength}
          value={value}
          style={{ flex: 1, fontSize: 16, }}
          {...props}
        />
        {right}
      </View>
    </View>
  );
};

Input.defaultProps = {
  'isNumeric': false
}