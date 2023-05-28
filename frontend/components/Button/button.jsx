import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Bullet from "../../assets/icons/bullet.svg";
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

  container3:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    gap:10,
    marginTop:20,
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
    borderRadius: 20,
    justifyContent: "center",

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
    fontWeight: 700,
  },
  textStyle3:{
    fontSize:18,
    
  }
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


export const ScreenBtn1 = ({
  style,
  onPress,
  children,
  textColor,
  width,
  height,
  ...props
}) => {
  return (
    <View style={styles.container3}>
      <Bullet height={50}/>
      <Button
      {...props}
      labelStyle={styles.textStyle3}
      onPress={onPress}
      width={width}
      height={height}
      buttonColor={"#91A0F6"}
      textColor={textColor || "#fff"}
      style={{ ...styles.btn3, ...style }}
    >
      {children}
    </Button>
    </View>
    
  );
};


CustomBtn.defaultProps = {
  width: "40%",
};
