import { React, useState } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { Pagemain, Page, Header, BackButton } from "../../../components";


export const Location = ({ navigation }) => {
    const [pin, setPin] = useState({
        latitude: 9.072264,
        longitude: 7.491302,
    })



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
        },
        map: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            zIndex: -10
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 60,
            paddingHorizontal: 12,

        },
        headtext: {
            fontSize: 20,
            lineHeight: 25,
            fontWeight: '600',
            fontFamily: "Encode-Sans-SemiBold",
            marginLeft: 10
        },
        locationContainer: {
            backgroundColor: '#000',
            width: 0.95 * Dimensions.get('screen').width,
            height: 205,
            borderRadius: 20,
            position: 'absolute',
            bottom: 90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
            marginHorizontal: 10,
            borderRadius: 13
        },
        txt: {
            fontSize: 20,
            lineHeight: 25,
            fontWeight: '700',
            fontFamily: "Encode-Sans-Medium",
            height: 35,
            marginTop: 20
        }
    })

    return (
        <Page >
            <Header
                startIcon={<BackButton navigation={navigation} />}
                title={'Pharmaceutical Stores'} />
            

        </Page>

    )

}