import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import * as Font from 'expo-font';
import {useFonts} from "expo-font";


export interface LoginButtonProps {
    onPress: () => void,
    title: string,
}


export const LoginButton = ({onPress, title}: LoginButtonProps) => {
    //UseFonts
    let [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),

    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Caricamento dei font...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.textStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 80,
        borderRadius: 35,
        backgroundColor: '#163440',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 32,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
    }
})