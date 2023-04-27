import { Pressable } from "react-native";
import ArrowBack from "../../assets/icons/arrow-back.svg";

export const BackButton =({navigation}) => {

    return (
        <Pressable onPressIn={() => navigation.goback()}>
            <ArrowBack fill={"#fff"}  />
        </Pressable>
    )

}