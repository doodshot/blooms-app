import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export const BadgeCard = ({ title, description, icon }) => {
    return (
        <View style={styles.card}>
            <Ionicons name={icon} size={40} style={styles.cardIcon} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    // Stili per la card
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardIcon: {
        color: "#163440",
        marginRight: 16,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        color: "#163440",
    },
    cardDescription: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: "#607D8B",
    }
})