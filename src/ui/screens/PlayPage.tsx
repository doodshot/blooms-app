import {View, StyleSheet, SafeAreaView, Text} from "react-native";
import Gamecomponent from "../components/gamecomponent";


// la pagina del gioco per fare i punti
export default function PlayPage() {
    let points = 0;
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.contentRewards}>
                    <Text style={styles.containerTxt}>
                        Points: {points}
                    </Text>
                </View>
            <View style={styles.ctnTxt}>
                <Text style={styles.titleTxt}>
                    Gioca i quiz per fare punti da Usare all’evento!
                </Text>
                <View style={styles.ctnGameQuiz}>
                    <Gamecomponent number={"1"} onPress={() => console.log("Premuto")}/>
                    <Gamecomponent number={"2"} onPress={() => console.log("Premuto")}/>
                    <Gamecomponent number={"3"} onPress={() => console.log("Premuto")}/>
                    <Gamecomponent number={"4"} onPress={() => console.log("Premuto")}/>
                    <Gamecomponent number={"5"} onPress={() => console.log("Premuto")}/>
                    <Gamecomponent number={"6"} onPress={() => console.log("Premuto")}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A1BCC1',
    },
    contentRewards: {
        width: 130,
        height: 45,
        borderWidth: 1,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 8,
        borderColor: '#163440',
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#163440'
    },
    containerTxt:{
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: '#163440'
    },
    ctnTxt: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 20,
    },
    titleTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#fff',
        marginVertical: 20,
        width: 300,
    },
    ctnGameQuiz: {
        width: 75,
        height: 444,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },
});
















