import {Image, ImageBackground, Text, View, StyleSheet, Pressable, TextInput, Alert} from "react-native";
import {LoginButton} from "../components/LoginButton";
import {useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {LoginCheck} from "../components/LoginCheck";
import 'firebase/auth' // ringraziamo tutti insieme stackoverflow 🙏🙏🙏🙏🙏🙏🙏
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth"; // Importa il metodo di login
import {auth} from "../../../firebase"; // La configurazione di Firebase


export default function  Login() {

    // navigation
    const nav = useNavigation()

    //pulsanti
    const onBackButton= () => {
        return(
            nav.goBack()
        )
    }
    //USE State
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

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

    // Funzione di Login
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Errore", "Per favore, inserisci email e password.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Utente autenticato e ha loggato:", user);
            if (user != null) {
                nav.reset({
                    index: 0,
                    routes: [{name: 'TabNavigator'}], // da errore ma funziona
                });
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Errore di login", "Credenziali errate o account non esistente.");
        }
    };

    const handleLoginWithOutInternt = () => {
        return nav.reset({
            index: 0,
            routes: [{name: 'TabNavigator'}], // da errore ma funziona
        });
    }
    return(
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
                    keyboardType="email-address"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="Inserisci la tua password"
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    style={styles.emailInput}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.cointainerLoginCheck}>
               <LoginCheck onPress={handleLoginWithOutInternt} title={"Login"}/> //modificato solo perchè sono in aereo rimettere la funzione normale quando sarò di nuov online
            </View>
        </ImageBackground>
    );
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
        marginTop: 36
    },
    cointainerLoginCheck: {
        alignItems: 'center',
        marginTop: 50,
    }

})