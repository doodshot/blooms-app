import {Text, TouchableOpacity, View, StyleSheet} from "react-native";


export type gamecomponentProps = {
    number: string;
    onPress: () => void;
}

const Gamecomponent = ({number, onPress}: gamecomponentProps) => {
    return (
        <View style={styles.quizGame}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.txtGame}>
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
    quizGame: {
        width: 54,
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Gamecomponent;