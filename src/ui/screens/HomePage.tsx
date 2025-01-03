import {View, StyleSheet, SafeAreaView, Text} from "react-native";


// la pagina del gioco per fare i punti
export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contentRewards}>
                    <Text>

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
        width: 100,
        height: 45,
        borderWidth: 1

    }
});