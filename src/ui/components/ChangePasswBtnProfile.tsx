

// BTN per cambiare passswrod

import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export interface ChangePasswBtnProfileProps {
    title: string;
    OnPress :  () => void;
    style?: any
}


export const ChangePasswBtnProfile = ({title, OnPress}:ChangePasswBtnProfileProps) => {
    return (
        <View style={styles.ctn}>
            <TouchableOpacity onPress={OnPress} style={styles.ctnPressable}>
                <Text style={styles.txt}>
                    {title}
                </Text>
                <Ionicons name={"lock-closed"} size={24} color={"#163440"}/>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    ctn: {
        marginTop: 20

    },
    ctnPressable: {
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#163440',
        borderRadius: 20,
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black',
        backgroundColor: '#A1BCC1',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    txt: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: "black"
    }
});