import {View, Text, ImageBackground , StyleSheet, Image} from "react-native";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import {useState} from "react";
import {LoginButton} from "../components/LoginButton";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/RootStack";



export default function RegisterLogin(){
    //UseNavigation
    const nav = useNavigation();
    // onPress
    const onPressLogin = () => {
        return (
            nav.navigate("Login")
        )
    }
    const onPressRegister = () => {
        return (
            nav.navigate("Register")
        )
    }
    let [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Caricamento dei font...</Text>
            </View>
        );
    }
    return (
   <ImageBackground
   style={styles.container}
   resizeMode="cover"
   source={require('../../../assets/backgroundscreen.png')}
   >
      <Image
          source={require('../../../assets/logoImg.png')}
          style={styles.imgLogo}/>
       <Text style={styles.textTitle}>
           Benvenuti in Bloom Net!
       </Text>
       <Text style={styles.textSubTitle}>
           l’Applicazione per collegarti
           Nei nostri eventi di gaming
           & Game Developer
       </Text>
       <View style={styles.ctnLoginButton}>
           <LoginButton onPress={onPressLogin} title={"Login"}/>
           <Text style={styles.txtOr}> or </Text>
           <Text style={styles.txtCreateAccount} onPress={onPressRegister}> Create an account</Text>
       </View>
   </ImageBackground>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imgLogo: {
        marginTop: 40,
        width: '100%',
        height: 350,
    },
    textTitle: {
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        marginHorizontal: 16
    },
    textSubTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        marginTop: 16,
        marginHorizontal: 28,
        width: 230
    },
    ctnLoginButton: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtOr: {
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 28,
    },
    txtCreateAccount: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 32,
    },

})