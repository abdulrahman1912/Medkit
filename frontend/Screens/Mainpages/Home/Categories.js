import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ScreenBtn1, Page, Header, BackButton} from "../../../components";

export const Categories =({ navigation }) => {
    const styles = StyleSheet.create ({

    })

    return(
        <Page>
            <Header startIcon={<BackButton/>} title={"Categories"}/>
        </Page>
    )
}