import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { QuizData } from "../../model/quizData";
import { storage } from "../../model/storage/storage";

export default function QuizScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { quizId } = route.params as { quizId: string };
    const quiz = QuizData[parseInt(quizId) - 1];
    const [points, setPoints] = useState("0");
    const [modalVisible, setModalVisible] = useState(false);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    useEffect(() => {
        const savedPoints = storage.getItem("points");
        if (savedPoints) {
            setPoints(savedPoints);
        }
    }, []);

    const handleFinishQuiz = (selectedOptionIndex: number) => {
        const isCorrect = selectedOptionIndex === quiz.answer;

        if (isCorrect) {
            // Aggiorna i punti
            const newPoints = (parseInt(points) + 10).toString();
            setPoints(newPoints);
            storage.setItem("points", newPoints);

            // Aggiorna i quiz completati
            const savedCompletedQuizzes = storage.getItem("completedQuizzes");
            const completedQuizzes = savedCompletedQuizzes ? JSON.parse(savedCompletedQuizzes) : [];
            if (!completedQuizzes.includes(quizId)) {
                completedQuizzes.push(quizId);
                storage.setItem("completedQuizzes", JSON.stringify(completedQuizzes));
            }
        }

        setIsCorrectAnswer(isCorrect);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        // @ts-ignore
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.quizTitle}>Quiz #{quizId}</Text>
            <Text style={styles.quizContent}>{quiz.question}</Text>

            {quiz.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleFinishQuiz(index)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
            <Text style={styles.pointsText}>Points: {points}</Text>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={[
                            styles.modalText,
                            { color: isCorrectAnswer ? "#28a745" : "#dc3545" }
                        ]}>
                            {isCorrectAnswer ? "Hai vinto!" : "Hai perso!"}
                        </Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.modalButtonText}>Chiudi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ecf0f1",
        padding: 20,
    },
    quizTitle: {
        fontSize: 32,
        fontFamily: "Poppins-SemiBold",
        fontWeight: "bold",
        marginBottom: 20,
    },
    quizContent: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        marginBottom: 40,
    },
    optionButton: {
        backgroundColor: "#163440",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: "100%",
    },
    optionText: {
        color: "#fff",
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        fontSize: 16,
    },
    pointsText: {
        fontFamily: "Poppins-SemiBold",
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        elevation: 5,
        minWidth: 250,
    },
    modalText: {
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
        marginBottom: 20,
        textAlign: "center",
    },
    modalButton: {
        backgroundColor: "#163440",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
    },
    modalButtonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
});