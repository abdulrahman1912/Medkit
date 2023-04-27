import { TextInput, View, StyleSheet,Text } from "react-native";

const styles = StyleSheet.create({

    inputHeader:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginVertical: 2.5
    },

    inputContainer: {
        height: 55,
            borderRadius: 25,
            paddingVertical: 12,
            paddingHorizontal: 16,
            border: 0,
            marginTop: 3,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "#E2E4EB"
    },

    textInput:{
        width:"80%",
        height:"100%",
        color:"#000"
    },
    label: {
        color: "#615B5B"
    }
});

export const Input = ({labelName, 
    placeholder, 
    onChange, 
    title,
    type, 
    secure, 
    isNumeric, 
    style,
    styleInput,
    left,
    right,
    maxLength,
    ...rest
}) => {
return (
    <View style={[styles.inputHeader, style]}>
            <Text style={styles.label}>{labelName}</Text>
            <View 
                style={{...styles.inputContainer, ...styleInput }}
            >
                { left }
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    keyboardType={!isNumeric ? 'default' : 'numeric'}
                    textContentType={type} //can take possible values of "emailAddress", "password", "newPassword", "oneTimeCode"
                    onChangeText={onChange}
                    style={styles.textInput}
                    activeUnderlineColor={title}
                    placeholderTextColor={"#6F6F6F"}
                    selectionColor={"#E2E4EB"}
                    maxLength={maxLength}
                    borderColor={""}
                    {...rest}
                    editable={rest.disabled}
                />
                { right }
            </View>
        </View>
    )
    
}



Input.defaultProps = {
    'isNumeric': false
}
