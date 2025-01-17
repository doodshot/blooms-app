import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, ImageBackground, ScrollView, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { storage } from "../../model/storage/storage";
import { BadgeCard } from "../components/BadgeCard";

export default function BadgePage() {
    const [points, setPoints] = useState(0);
    const [badges, setBadges] = useState([
        { id: 1, title: "Masterclass 1", description: "Completa la prima masterclass", icon: "star-outline", unlocked: false, code: "1234" },
        { id: 2, title: "Masterclass 2", description: "Partecipa a tutte le sessioni", icon: "trophy-outline", unlocked: false, code: "5678" },
        { id: 3, title: "Masterclass 3", description: "Completa tutti i quiz", icon: "game-controller-outline", unlocked: false, code: "91011" },
        { id: 4, title: "Masterclass 4", description: "Completa la masterclass di Unity", icon: "medal-outline", unlocked: false, code: "1213" },
        { id: 5, title: "Masterclass 5", description: "Completa la masterclass di C#", icon: "star-outline", unlocked: false, code: "1415" },
        // tornei aggiunti
        { id: 6, title: "League of Legends Tournament", description: "Partecipa a un torneo di League of Legends", icon: "podium-outline", unlocked: false, code: "1617" },
        { id: 7, title: "League of Legends Champion", description: "Partecipa a torneo di Zelda", icon: "shield-checkmark-outline", unlocked: false, code: "1819" },
        { id: 8, title: "Retro Gaming Participant", description: "Partecipa a un torneo di Retro Gaming", icon: "game-controller-outline", unlocked: false, code: "2021" },
        { id: 9, title: "Retro Gaming Champion", description: "Partecipa a un torneo di Valorant", icon: "medal-outline", unlocked: false, code: "2223" },
    ]);
    const [inputCode, setInputCode] = useState("");

    useEffect(() => {
        const loadInitialData = () => {
            // Carica i punti
            const savedPoints = storage.getItem("points");
            if (savedPoints) {
                setPoints(parseInt(savedPoints));
            }
        };
        loadInitialData();
    }, []);

    const handleUnlockBadge = () => {
        const badgeIndex = badges.findIndex(badge => badge.code === inputCode);
        if (badgeIndex !== -1) {
            // Sblocca il badge
            const updatedBadges = [...badges];
            updatedBadges[badgeIndex].unlocked = true;
            setBadges(updatedBadges);

            // Mostra un messaggio di successo
            Alert.alert("Successo", `${updatedBadges[badgeIndex].title} è stato sbloccato!`);
            setInputCode(""); // Resetta il campo di input
        } else {
            // Mostra un messaggio di errore
            Alert.alert("Errore", "Codice non valido, riprova.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTxtHeader}>
                <Text style={styles.title}>Badge Page</Text>
                <Text style={styles.subtitle}>
                    In questa pagina potrai sbloccare i badge delle varie masterclass!
                </Text>
                <View style={styles.ctnWin}>
                    <Text style={styles.txtWin}>
                        Inserisci il codice per sbloccare il badge!
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.txtInputWin}
                            keyboardType={"numeric"}
                            value={inputCode}
                            onChangeText={setInputCode}
                            placeholder=" "
                        />
                        <Ionicons
                            name={"send"}
                            size={24}
                            color={"#163440"}
                            onPress={handleUnlockBadge} // Aggiungi il comportamento al click
                        />
                    </View>
                </View>
            </View>
            <View style={styles.coinRewards}>
                <ImageBackground
                    source={require("../../../assets/imagePartyBackground.png")}
                    style={styles.ctnCoinRewardsIcon}
                >
                    <Ionicons name={"medal"} size={32} style={{ color: "#163440" }} />
                    <Text style={styles.coinRewardsTitle}>{points}</Text>
                </ImageBackground>
            </View>
            <ScrollView style={styles.coinRewards2}>
                {/* Genera dinamicamente le card */}
                {badges.map((badge, index) => (
                    <BadgeCard
                        key={index}
                        title={badge.title}
                        description={badge.description}
                        icon={badge.unlocked ? badge.icon.replace("-outline", "") : badge.icon} // Cambia icona se sbloccato
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A1BCC1",
        flexDirection: "column",
    },
    containerTxtHeader: {
        marginHorizontal: 16,
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        color: "#163440",
    },
    subtitle: {
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        color: "#163440",
        marginTop: 24,
    },
    coinRewards: {
        position: "absolute",
        right: 18,
        top: 40,
    },
    coinRewards2: {
        marginTop: 24,
        marginHorizontal: 16,
    },
    coinRewardsTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        color: "#163440",
        marginLeft: 10,
    },
    ctnCoinRewardsIcon: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        resizeMode: "stretch",
        shadowColor: "#163440",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    ctnWin: {
        marginTop: 10,
    },
    txtWin: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "#163440",
        marginBottom: 10,
    },
    txtInputWin: {
        flex: 1,
        height: 40,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "#163440",
        padding: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#163440",
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 10,
    },
});