

// BTN per cambiare passswrod

import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

export interface ChangePasswBtnProfileProps {
    title: string;
    OnPress :  () => void;
}


export const ChangePasswBtnProfile = ({title, OnPress}:ChangePasswBtnProfileProps) => {
    return (
        <View style={styles.ctn}>
            <TouchableOpacity onPress={OnPress} style={styles.ctnPressable}>
                <Text style={styles.txt}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    ctn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ctnPressable: {
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#163440',
        borderRadius: 20,
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black',
        backgroundColor: '#A1BCC1'
    },
    txt: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: "black"
    }
});