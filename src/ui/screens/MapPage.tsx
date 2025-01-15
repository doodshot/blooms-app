import {Image, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
export default function MapPage() {
    return (
     <SafeAreaView style={styles.container}>
         <Ionicons name={"rose-outline"} size={64} color={"#163440"} style={styles.roseIcon} />
         <View style={styles.title}>
             <Text style={styles.titleTxt}>
                 Ecco la Mappa!
             </Text>
         </View>
         <Image
             style={styles.img}
             source={require("../../../assets/Mappa.png")}>
         </Image>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A1BCC1",
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        marginRight: 16
    },
    title: {
        marginHorizontal: 16,
    },
    titleTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        color: "#163440",
    },
    roseIcon: {
        position: 'absolute',
        right: 20,
        top: 42,
    }
});