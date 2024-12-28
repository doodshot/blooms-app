import {View, Text, Pressable, Image, TextInput, ImageBackground, StyleSheet} from "react-native";
import {useFonts} from "expo-font";
import {LoginCheck} from "../components/LoginCheck";
import {useNavigation} from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importa la funzione di registrazione
import {auth} from "../../../firebase"
import {useState} from "react";
import 'firebase/auth' // ringraziamo tutti insieme stackoverflow 🙏🙏🙏🙏🙏🙏🙏


export default function Register() {
    // navigation
    const nav = useNavigation()

    const onBackButton= () => {
        console.warn("sei stato premuto")
        return(
            nav.goBack()
        )
    }
    //USE State
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    // fonts
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
    //logic
    //registro utente
    const onPressRegister = async () => {
        if (password !== passwordConfirm){
            alert("PASSWORD SBAGLIATA!")
            return;
        }
        if (!email || email.trim().length === 0) {
            alert("L'email non può essere vuota");
            return;
        }

        if (!password || password.trim().length === 0) {
            alert("La password non può essere vuota");
            return;
        }
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log("Utente creato con successo:", user);
            return nav.reset({
                index: 0,
                routes: [{name: 'TabNavigator'}] // da errore ma funziona
            })

        } catch (err){
            console.log(err)
            alert(err)
        }
    }


    return (
        <ImageBackground
            style={styles.container}
            resizeMode="cover"
            source={require('../../../assets/backgroundscreen.png')}
        >
            <Pressable onPress={onBackButton} style={styles.containerBtnBack}>
                <Image
                    source={require('../../../assets/backbutton.png')}
                    style={styles.imgBtnBack}
                />
            </Pressable>
            <Image
                source={require('../../../assets/logoImg.png')}
                style={styles.imgLogo}/>

            {/* Parte del input di login email and password */}

            <View style={styles.containerEmail}>
                <TextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Inserisci la tua email"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    style={styles.emailInput}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.containerPassword}>
                <TextInput
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="Inserisci la tua password"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    style={styles.emailInput}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.containerConfermaPassword}>
                <TextInput
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="Conferma la tua password"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    style={styles.emailInput}
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                />
            </View>
            <View style={styles.cointainerLoginCheck}>
                <LoginCheck onPress={onPressRegister} title={"Register"}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgLogo: {
        marginTop: 40,
        width: '100%',
        height: 350
    },
    containerBtnBack: {
        position: 'absolute',
        top:'5%',
        left: '6%',
        zIndex: 2,
    },
    imgBtnBack: {
        width: 50,
        height: 50,
    },
    containerEmail: {
        alignItems: 'center'
    },
    emailInput: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
        width: 300,
        backgroundColor: 'rgba(22, 52, 100, 0.25)',
        borderRadius: 20,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-Regular'
    },
    containerPassword: {
        alignItems: 'center',
        marginTop: 24
    },
    containerConfermaPassword: {
        alignItems: 'center',
        marginTop: 24
    },
    cointainerLoginCheck: {
        alignItems: 'center',
        marginTop: 50,
    },

})