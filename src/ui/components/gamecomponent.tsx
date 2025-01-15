import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export type gamecomponentProps = {
    number: string;
    onPress: () => void;
    isCompleted?: boolean;
}

const Gamecomponent = ({ number, onPress, isCompleted }: gamecomponentProps) => {
    return (
        <View style={[
            styles.quizGame,
            isCompleted && styles.completedQuizGame
        ]}>
            <TouchableOpacity
                onPress={onPress}
                disabled={isCompleted}
            >
                <Text style={[
                    styles.txtGame,
                    isCompleted && styles.completedTxtGame
                ]}>
                    {number}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    txtGame: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#163440',
    },
    completedTxtGame: {
        color: '#999', // Testo più chiaro per i quiz completati
    },
    quizGame: {
        width: 54,
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completedQuizGame: {
        backgroundColor: '#e6e6e6', // Sfondo più chiaro per i quiz completati
        opacity: 0.8,
    }
})

export default Gamecomponent;