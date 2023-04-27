import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: "100%",
    alignItems: "center",
  },

  container2: {
    paddingTop: 20,
    width: "100%",
    alignItems: "center",
  },

  btn: {
    height: 60,
    width: "95%",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
  },
  btn2: {
    borderColor: "#91A0F6",
    borderWidth: 1,
    height: 60,
    width: "95%",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
  },
  btn3: {
    height: 50,
    width: "45%",
    borderRadius: 10,
    display: "flex",
  },
  btn4: {
    height: 60,
    width: "100%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
  },
  textStyle2: {
    fontSize: 18,
  },
});

export const CustomBtn = ({
  style,
  onPress,
  children,
  textColor,
  ...props
}) => {
  return (
    <Button
      {...props}
      labelStyle={styles.textStyle}
      onPress={onPress}
      buttonColor={"#91A0F6"}
      textColor={textColor || "#fff"}
      style={{ ...styles.btn, ...style }}
    >
      {children}
    </Button>
  );
};
export const CustomBtnLight = ({
  style,
  onPress,
  children,
  textColor,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Button
        {...props}
        labelStyle={styles.textStyle}
        onPress={onPress}
        buttonColor={"fff"}
        textColor={textColor || "#91A0F6"}
        style={{ ...styles.btn2, ...style }}
      >
        {children}
      </Button>
    </View>
  );
};

export const ScreenBtn = ({
  style,
  onPress,
  children,
  textColor,
  ...props
}) => {
  return (
    <Button
      {...props}
      labelStyle={styles.textStyle2}
      onPress={onPress}
      buttonColor={"#91A0F6"}
      textColor={textColor || "#fff"}
      style={{ ...styles.btn4, ...style }}
    >
      {children}
    </Button>
  );
};


CustomBtn.defaultProps = {
  width: "40%",
};
