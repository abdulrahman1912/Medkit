import React from 'react';
import { Image, Pressable, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper"
import Comart from "../../assets/medicine/comart.svg";
import Bell from "../../assets/icons/bell.svg";
import Heart from "../../assets/icons/heart.svg";
import Upload from "../../assets/icons/upload.svg";
import { cartatom } from '../../jotai-store';
import { useAtom } from 'jotai';


const styles = StyleSheet.create({

    imgcontainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "column",
    },
    safeArea: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#91A0F6",
        height: "100%",
        justifyContent: "center",
    },

    container: {
        backgroundColor: "#fff",
        paddingTop: 20,
        height: 1000,
        width: "100%",
        textAlign: "left",
    },

    product: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 30,
    },

    product_item: {
        width: 155,
        backgroundColor: "#E2E4EB",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 10
    },

    item: {
        marginTop: 5,
        backgroundColor: "#FFFFFF",
        width: 120,
        height: 110,
        borderRadius: 10,
        alignItems: "center",
    },

    text: {
        alignSelf: "flex-start",
    },

    button: {
        backgroundColor: "#91A0F6",
        marginTop: 3,
        height: 12,
        width: 25,
        borderRadius: 20,
        alignItems: "center",
    },
})




export const CustomCard = ({ children, style, ...props }) => {
    return (
        <Pressable
            {...props}
            style={{
                backgroundColor: "#E2E4EB",
                padding: 8,
                ...style
            }}>
            {children}
        </Pressable>
    )
}

export const CardContent = ({ src, style, title }) => {
    return (
        <View style={{ ...style }}>
            <Image source={src} style={{ ...style }} />
            <Text>{title}</Text>
        </View>
    )
}

export const DrugCard = ({ drug, price, text1, text2 ,navigation}) => {
    const [cart, setCart] = useAtom(cartatom)

    function addToCart(){
        setCart([...cart, {drug, price, text1, text2}])
        navigation.navigate('Productdetail')

    }
    return (
        <View style={styles.product_item}>
            <View style={styles.item}>
                <Comart width={100} height={100} />
            </View>
            <Text style={{ ...styles.text, marginTop: 5 }}>{drug}</Text>
            <Text style={{ ...styles.text, fontSize: 10 }}>
                {text1}
            </Text>
            <Text style={{ ...styles.text, fontSize: 10 }}>
                {text2}
            </Text>
            <View
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                    marginTop: 5,
                    gap: 38,
                }}
            >
                <Text
                    style={{ fontSize: 10, color: "#5F77E1", fontWeight: "600" }}
                >
                   ${price}
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                    <Heart />
                    <TouchableOpacity onPress={addToCart} style={styles.button}>
                        <Text
                            style={{
                                fontSize: 7,
                                fontWeight: "700",
                                color: "#FFFFFF",
                            }}
                        >
                            Buy
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export const Druglist = [
    {
        id: 1,
        drug: "Coartem",
        price: "₦"+1200,
        text1: 'coartem is a tablet drug',
        text2: "contains 20g of artemether",
    },
    {
        id: 2,
        drug: "Ibuprofen",
        price: "₦"+250,
        text1: 'ibuprofen is a nonsteroidal anti-inflammatory drug',
        text2: "commonly used to relieve pain and reduce inflammation",
    },
    {
        id: 3,
        drug: "Paracetamol",
        price: "₦"+100,
        text1: 'paracetamol is a common pain reliever and fever reducer',
        text2: "widely used for its analgesic and antipyretic properties",
    },
    {
        id: 4,
        drug: "Amoxicillin",
        price: "₦"+500,
        text1: 'amoxicillin is an antibiotic',
        text2: "used to treat a wide range of bacterial infections",
    },
    {
        id: 5,
        drug: "Omeprazole",
        price: "₦"+800,
        text1: 'omeprazole is a proton pump inhibitor',
        text2: "reduces the production of stomach acid",
    },
    {
        id: 6,
        drug: "Metformin",
        price: "₦"+300,
        text1: 'metformin is an oral medication for diabetes',
        text2: "helps control blood sugar levels",
    },
    {
        id: 7,
        drug: "Atorvastatin",
        price: "₦"+700,
        text1: 'atorvastatin is a statin medication',
        text2: "used to lower cholesterol levels",
    },
    {
        id: 8,
        drug: "Lisinopril",
        price: "₦"+400,
        text1: 'lisinopril is an angiotensin-converting enzyme (ACE) inhibitor',
        text2: "used to treat high blood pressure and heart failure",
    },
    {
        id: 9,
        drug: "aspirin",
        price: "₦"+150,
        text1: 'aspirin is a nonsteroidal anti-inflammatory drug',
        text2: "used for pain relief, fever reduction, and as an antiplatelet agent",
    },
    {
        id: 10,
        drug: "cetirizine",
        price: "₦"+200,
        text1: 'cetirizine is an antihistamine',
        text2: "commonly used to treat allergy symptoms",
    },
];


