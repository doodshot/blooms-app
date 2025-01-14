import {SafeAreaView, View, StyleSheet, Text, TextInput, ScrollView, ImageBackground} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Icona Rosa in alto a destra */}
                <Ionicons name={"rose-outline"} size={64} color={"#163440"} style={styles.roseIcon} />

                <View style={styles.ctnTxtTitleAndSubTitle}>
                    <Text style={styles.titletxt}>
                        Ciao, bloom user!
                    </Text>
                    <Text style={styles.subtitle}>
                        trova il tuo stand
                    </Text>
                    <View>
                        <TextInput
                            style={styles.textinput}
                            placeholder={"Cerca qui il tuo stand"}
                            placeholderTextColor={"rgba(0, 0, 0, 0.5)"}>
                        </TextInput>
                        <Ionicons name={"search"} size={24} color={"#163440"} style={styles.iconsearch}/>
                    </View>
                    <Text style={styles.prossimiTxtStyle}>
                        Prossimi Eventi
                    </Text>
                </View>

                {/* Prima ScrollView (Orizzontale) */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.ctnScrollView}
                >
                    <View style={styles.ScrollViewBox}>
                        <ImageBackground
                            source={require("../../../assets/backgroundHome.png")}
                            style={styles.imgScrollView}
                            imageStyle={styles.imageBackgroundStyle}
                        >
                            <Text style={styles.imageText}>Torneo di League of Legends</Text>
                            <Text style={styles.imageTime}>11:00 - 13:00</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.ScrollViewBox}>
                        <ImageBackground
                            source={require("../../../assets/backgroundScrollViewMasterClass.jpg")}
                            style={styles.imgScrollView}
                            imageStyle={styles.imageBackgroundStyle}
                        >
                            <Text style={styles.imageText}>Game Developer MasterClass</Text>
                            <Text style={styles.imageTime}>14:00 - 16:00</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.ScrollViewBox}>
                        <ImageBackground
                            source={require("../../../assets/standScrollView.jpg")}
                            style={styles.imgScrollView}
                            imageStyle={styles.imageBackgroundStyle}
                        >
                            <Text style={styles.imageText}>Stand Aziendale Formativo</Text>
                            <Text style={styles.imageTime}>16:30 - 18:00</Text>
                        </ImageBackground>
                    </View>
                </ScrollView>

                {/* Seconda ScrollView (Verticale) */}
                <Text style={styles.padiglioniTxtStyle}>Eventi e Padiglioni</Text>
                <ScrollView
                    style={styles.secondScrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.padiglioniBox}>
                        <Ionicons name={"rose-outline"} size={24} color={"#fff"} />
                        <Text style={styles.padiglioneText}>Padiglione 1</Text>
                        <View style={{flexDirection:'column', marginHorizontal: 20}}>
                            <Text style={styles.ctnText}>
                                Eventi di Tornei di gaming,
                            </Text>
                            <Text style={styles.ctnText}>
                                dal retrò al competitivo
                            </Text>
                        </View>
                    </View>

                    <View style={styles.padiglioniBox}>
                        <Ionicons name={"rose-outline"} size={24} color={"#fff"} />
                        <Text style={styles.padiglioneText}>Padiglione 2</Text>
                        <View style={{flexDirection:'column', marginHorizontal: 20}}>
                            <Text style={styles.ctnText}>
                                Masterclass con professionisti
                            </Text>
                            <Text style={styles.ctnText}>
                                del settore
                            </Text>
                        </View>
                    </View>

                    <View style={styles.padiglioniBox}>
                        <Ionicons name={"rose-outline"} size={24} color={"#fff"} />
                        <Text style={styles.padiglioneText}>Padiglione 1</Text>
                        <View style={{flexDirection:'column', marginHorizontal: 20}}>
                            <Text style={styles.ctnText}>
                                Eventi di Stand aziendali,
                            </Text>
                            <Text style={styles.ctnText}>
                                per la tua formazione!
                            </Text>
                        </View>
                    </View>

                    <View style={styles.padiglioniBox}>
                        <Ionicons name={"rose-outline"} size={24} color={"#fff"} />
                        <Text style={styles.padiglioneText}>Padiglione 2</Text>
                        <View style={{flexDirection:'column', marginHorizontal: 20}}>
                            <Text style={styles.ctnText}>
                                Eventi di Tornei di gaming,
                            </Text>
                            <Text style={styles.ctnText}>
                                dal retrò al competitivo
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A1BCC1',
    },
    roseIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    ctnTxtTitleAndSubTitle: {
        marginHorizontal: 24,
        width: '100%',
    },
    titletxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#163440',
        marginTop: 50,
    },
    subtitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#163440',
        marginTop: 10,
    },
    textinput: {
        width: 320,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginTop: 16,
        marginBottom: 16,
    },
    iconsearch: {
        position: 'absolute',
        right: 82,
        top: 22,
    },
    prossimiTxtStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#163440',
        marginTop: 10,
        marginBottom: 10,
    },
    ctnScrollView: {
        paddingHorizontal: 24,
    },
    ScrollViewBox: {
        width: 226,
        height: 220,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 16,
        shadowColor: '#163440',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    imgScrollView: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden', // Assicura che i bordi dell'immagine siano arrotondati
    },
    imageBackgroundStyle: {
        borderRadius: 20,
    },
    imageText: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    imageTime: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
    },
    padiglioniTxtStyle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#163440',
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 24,
    },
    secondScrollView: {
        marginHorizontal: 24,
    },
    padiglioniBox: {
        flexDirection: 'row',
        backgroundColor: '#163440',
        borderRadius: 20,
        padding: 16,
        marginBottom: 10,
        shadowColor: '#163440',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        elevation: 10,
        alignItems: 'center',
    },
    ctnText: {
        fontSize: 12,
        color: '#fff',
        paddingHorizontal: 8,
    },
    padiglioneText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});