import {View, StyleSheet, SafeAreaView, Text} from "react-native";


// la pagina del gioco per fare i punti
export default function PlayPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contentRewards}>
                    <Text style={styles.containerTxt}>
                        Points: 0000
                    </Text>
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
    content: {
        flex: 1,
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
    }
});
















