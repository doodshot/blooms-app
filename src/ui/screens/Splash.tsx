import { ImageBackground, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("RegisterLogin"); // anche se da errore trusta fidati funziona
        }, 3000);

        return () => clearTimeout(timer); // Pulisce il timer
    }, [navigation]);

    return (
        <ImageBackground
            style={styles.container}
            resizeMode="cover"
            source={require("../../../assets/splash.png")}
        >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
