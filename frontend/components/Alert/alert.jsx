import { Overlay } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

export const Alert = ({ isOpen, onDismiss, children, }) => {

    const styles = StyleSheet.create({
        alert: {
            borderRadius: 13,
            padding: 10,
            backgroundColor: "#FFF",
            height: 410,
            width:320
        }
    })
    
    return(
        <Overlay 
            isVisible={isOpen} 
            onBackdropPress={onDismiss}
            overlayStyle={styles.alert}
        >
            <View>
                {children}
            </View>
        </Overlay>
    )
}