import {View, StyleSheet, SafeAreaView} from "react-native";


// la pagina del gioco per fare i punti
export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#163440',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});