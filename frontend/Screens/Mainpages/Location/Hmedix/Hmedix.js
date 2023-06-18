import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ScreenBtn1 } from "../../../../components";
import Pic1 from "../../../../assets/images/hmedixpic1.svg";
import Star from "../../../../assets/icons/star.svg";
import Filledstar from "../../../../assets/icons/filledstar.svg";

export const Hmedix = ({ navigation }) => {
  const styles = StyleSheet.create({});

  return (
    <SafeAreaView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:20, marginTop:10}}>
        <Pic1 width={"100%"} />
        {/* slide for hmedix pics */}

        <View
          style={{ alignItems: "flex-start", textAlign: "left", marginTop: 30 }}
        >
          <Text style={{ fontSize: 25 }}>Description</Text>
          <Text style={{ marginTop: 5, fontSize: 16, lineHeight: 22 }}>
            H-Medix is a supermarket brand whose goal is to bring all types of
            good like food stuffs, electronics, toiletries and so on. That is
            not to say we are not keen on health. H-Medix pharmacy is equipped
            with original drugs and top notch pharmacists.
          </Text>
          <View style={{ display: "flex", flexDirection: "row", marginTop:20 }}>
            <Text style={{fontSize:18}}>Rating:</Text>
            <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 3,
                  gap: 3,
                }}
              >
                <Filledstar width={"20"} height={26} />
                <Filledstar width={"20"} height={26}/>
                <Filledstar width={"20"} height={26} />
                <Filledstar width={"20"} height={26} />
                <Star width={"20"} height={26} />
              </View>
          </View>
          <Text style={{fontSize:22,fontWeight:500, marginTop:25}}>Drugs Available</Text>
          <ScreenBtn1 width={"40%"}>Anti-fungal</ScreenBtn1>
          <ScreenBtn1 width={"45%"}>Anti-bacteria</ScreenBtn1>
          <ScreenBtn1 width={"50%"}>Anti-depressant</ScreenBtn1>
          <ScreenBtn1 width={"60%"}>Anti-hypertensive</ScreenBtn1>
          <ScreenBtn1 onPress={() => navigation.navigate('HmedixPage')} width={"40%"}>Anti-malaria</ScreenBtn1>
          <ScreenBtn1 width={"40%"}>Syrup</ScreenBtn1>
          <ScreenBtn1 width={"40%"}>Tablets</ScreenBtn1>
          <ScreenBtn1 width={"40%"}>Vitamins</ScreenBtn1>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
