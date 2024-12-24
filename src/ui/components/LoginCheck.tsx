import {TouchableOpacity, Text, StyleSheet} from "react-native";


interface LoginCheckProps{
    onPress: () => void,
    title: string,
}

export const LoginCheck = ({onPress, title}:LoginCheckProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.conintar}
        >
            <Text
                style={styles.text}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conintar: {
        backgroundColor: '#163440',
        padding: 13,
        borderRadius: 20,
        width: 140,
        alignItems: 'center'

    },
    text: {
        fontSize: 26,
        color: "#fff",
        fontFamily: 'Poppins-SemiBold'
    }
})