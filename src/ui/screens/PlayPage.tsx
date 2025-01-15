
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from "react-native";
import CointainerGameQuiz from "../components/CointainerGameQuiz";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {storage} from "../../model/storage/storage";

export default function PlayPage() {
    const route = useRoute();
    const navigation = useNavigation();

    const [points, setPoints] = useState(0);
    const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

    useEffect(() => {
        const loadInitialData = () => {
            // Carica i punti
            const savedPoints = storage.getItem("points");
            if (savedPoints) {
                setPoints(parseInt(savedPoints));
            }

            // Carica i quiz completati
            const savedCompletedQuizzes = storage.getItem("completedQuizzes");
            if (savedCompletedQuizzes) {
                setCompletedQuizzes(JSON.parse(savedCompletedQuizzes));
            }
        };

        loadInitialData();
    }, []);

    useEffect(() => {
        const focusListener = navigation.addListener("focus", () => {
            // Aggiorna punti e quiz completati quando la pagina riceve il focus
            const savedPoints = storage.getItem("points");
            if (savedPoints) {
                setPoints(parseInt(savedPoints));
            }

            const savedCompletedQuizzes = storage.getItem("completedQuizzes");
            if (savedCompletedQuizzes) {
                setCompletedQuizzes(JSON.parse(savedCompletedQuizzes));
            }
        });

        return () => {
            focusListener();
        };
    }, [navigation]);

    const handleQuizNavigation = (quizId: string) => {
        // @ts-ignore
        navigation.navigate("QuizPage", { quizId });
    };

    const renderQuizContainer = (startNum: number) => (
        <CointainerGameQuiz
            number1={startNum.toString()}
            number2={(startNum + 1).toString()}
            number3={(startNum + 2).toString()}
            number4={(startNum + 3).toString()}
            number5={(startNum + 4).toString()}
            number6={(startNum + 5).toString()}
            onPressQuiz={handleQuizNavigation}
            completedQuizzes={completedQuizzes}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentRewards}>
                <Text style={styles.containerTxt}>Points: {points}</Text>
            </View>
            <View style={styles.ctnTxt}>
                <Text style={styles.titleTxt}>
                    Gioca i quiz per fare punti da Usare all'evento!
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.ctnGame}
                >
                    {renderQuizContainer(1)}
                    {renderQuizContainer(7)}
                    {renderQuizContainer(13)}
                    {renderQuizContainer(19)}
                    {renderQuizContainer(25)}
                    {renderQuizContainer(31)}
                    {renderQuizContainer(37)}
                    {renderQuizContainer(43)}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A1BCC1",
    },
    contentRewards: {
        width: 130,
        height: 45,
        borderWidth: 1,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 8,
        borderColor: "#163440",
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "#163440",
    },
    containerTxt: {
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        color: "#163440",
    },
    ctnTxt: {
        alignItems: "flex-start",
        justifyContent: "center",
        marginHorizontal: 16,
        marginTop: 20,
    },
    titleTxt: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        color: "#fff",
        marginVertical: 20,
        width: 300,
    },
    ctnGame: {
        flexDirection: "row",
        marginTop: 22
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Sfondo semi-trasparente
    },
    modalContent: {
        width: 250,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});