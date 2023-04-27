import {View, Text, StyleSheet} from 'react-native';
import { BackButton, Header, Page ,ScreenBtn } from '../../components';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import { useState } from "react";


export const OtpVerification = ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const CELL_COUNT = 4;
    const styles = StyleSheet.create ({
        container: {
            backgroundColor: "#fff",
            borderRadius: 50,
            marginTop: 40,
            height: "100%",
            width: "100%",
            paddingHorizontal: 20,
            alignItems: "center",
            paddingTop: 10,
          },

    })

    return(
        <Page>
            <Header
            startIcon={<BackButton navigation={navigation}/>}
            title={'OTP Verification'}/>
            <View style={styles.container}></View>
        </Page>
    )
}