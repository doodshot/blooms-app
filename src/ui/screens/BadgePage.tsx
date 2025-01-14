import {View, StyleSheet, SafeAreaView, Text, Image, ImageBackground} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {rgbaColor} from "react-native-reanimated/lib/typescript/Colors";


export default function BadgePage() {
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.containerTxtHeader}>
                <Text style={styles.title}>
                    Badge Page
                </Text>
               <Text style={styles.subtitle}>
                   In questa pagina potrai sbloccare i badge delle varie masterclass!
               </Text>
           </View>
            <View style={styles.coinRewards}>
                    <ImageBackground
                        source={require("../../../assets/imagePartyBackground.png")}
                        style={styles.ctnCoinRewardsIcon}
                    >
                    <Ionicons name={"medal"} size={32} color={"#163440"} />
                    <Text style={styles.coinRewardsTitle}>
                        0000
                    </Text>
                    </ImageBackground>
            </View>
            <View style={styles.coinRewards2}>
                <Text  numberOfLines={2} style={styles.coinRewardsTxtSubtitle}>
                    Bloom points posseduti
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A1BCC1',
        flexDirection: 'column',
    },
    containerTxtHeader: {
        marginHorizontal: 16,
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#163440',
    },
    subtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#163440',
        marginTop: 10,
    },
    coinRewards: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    coinRewards2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    coinRewardsTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#163440',
        marginLeft: 10,
    },
    coinRewardsTxtSubtitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#163440',
        marginLeft: 10,
    },
    ctnCoinRewardsIcon: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        resizeMode: 'stretch',
        shadowColor: '#163440',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
    }
})