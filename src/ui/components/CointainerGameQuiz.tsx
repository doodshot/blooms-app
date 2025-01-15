import React from "react";
import { View, StyleSheet } from "react-native";
import Gamecomponent from "./gamecomponent";

export type CointainerGameQuizProps = {
    number1: string;
    number2: string;
    number3: string;
    number4: string;
    number5: string;
    number6: string;
    onPressQuiz: (quizId: string) => void;
    completedQuizzes: string[];
};

const CointainerGameQuiz = ({
                                number1,
                                number2,
                                number3,
                                number4,
                                number5,
                                number6,
                                onPressQuiz,
                                completedQuizzes,
                            }: CointainerGameQuizProps) => {
    return (
        <View style={styles.ctnGameQuiz}>
            <Gamecomponent
                number={number1}
                onPress={() => onPressQuiz(number1)}
                isCompleted={completedQuizzes.includes(number1)}
            />
            <Gamecomponent
                number={number2}
                onPress={() => onPressQuiz(number2)}
                isCompleted={completedQuizzes.includes(number2)}
            />
            <Gamecomponent
                number={number3}
                onPress={() => onPressQuiz(number3)}
                isCompleted={completedQuizzes.includes(number3)}
            />
            <Gamecomponent
                number={number4}
                onPress={() => onPressQuiz(number4)}
                isCompleted={completedQuizzes.includes(number4)}
            />
            <Gamecomponent
                number={number5}
                onPress={() => onPressQuiz(number5)}
                isCompleted={completedQuizzes.includes(number5)}
            />
            <Gamecomponent
                number={number6}
                onPress={() => onPressQuiz(number6)}
                isCompleted={completedQuizzes.includes(number6)}
            />
        </View>
    );
};

export const styles = StyleSheet.create({
    ctnGameQuiz: {
        width: 75,
        height: 444,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 30,
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10,
    },
});

export default CointainerGameQuiz;