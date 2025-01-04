import {View, Text, StyleSheet, SafeAreaView} from "react-native";


export default function MapPage() {
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
        backgroundColor: '#A1BCC1',
    },
    content: {
        flex: 1,
    },
})