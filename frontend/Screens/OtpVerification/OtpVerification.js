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

          codeFieldRoot: { marginVertical: 80 },
        cell: {
            width: 58,
            height: 57,
            lineHeight: 38,
            fontSize: 21,
            backgroundColor: "#E2E4EB" ,
            textAlign: 'center',
            borderRadius: 10,
            borderWidth:2,
            borderColor:'#E2E4EB',
            paddingVertical: 10,
            marginHorizontal:7,
            color: "#000" },

            focusCell: {
                backgroundColor: '#fff',
                borderColor:"#91A0F6",
    
            },

    })

    return(
        <Page>
            <Header
            startIcon={<BackButton navigation={navigation}/>}
            title={'OTP Verification'}/>
            <View style={styles.container}>
            <Text style={{fontSize:15, paddingTop:15}}>Enter your OTP verification code</Text>

            <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
             <ScreenBtn  onPress={() => navigation.navigate('ConfirmNewPassword')} style={{marginVertical:233}}>Verify</ScreenBtn>
            </View>
        </Page>
    )
}