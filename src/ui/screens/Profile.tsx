import {View, Text, SafeAreaView, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {ChangePasswBtnProfile} from "../components/ChangePasswBtnProfile";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../../firebase"; // La configurazione di Firebase
import 'firebase/auth' // ringraziamo tutti insieme stackoverflow 🙏🙏🙏🙏🙏🙏🙏
import { signOut } from "firebase/auth";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";


export default function Profile() {
    //UseNavigation
    const nav = useNavigation()
    //UseState
    const [showModal, setShowModal] = useState(false);
    const [modalMsg, setModalMsg] = useState("");
    //UseEffect
    //Business Logic
    const changePassw = async () => {

        // blocco di controllo per email che potrebbe essere null per il sistema ma non per noi
        if (!auth.currentUser?.email) {
            return;
        }
        try {
            await sendPasswordResetEmail(auth, auth.currentUser.email);
            setShowModal(true);
            setModalMsg("Ti abbiamo inviato una mail per cambiare la password!");
        } catch (error) {
            console.log(error)
            setModalMsg("Errore nell'invio della mail per cambiare la password!");
            setShowModal(false)
        }
    }
    const logOut = async () => {
        try {
            await signOut(auth);
            nav.reset({
                index: 0,
                routes: [{name: 'RegisterLogin'}], // da errore ma funziona
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Bisgona fare anche un button per cambiare password */}
                <View style={styles.ctnChangePasswAndLogOut}>
                    <View style={styles.contentEmail}>
                        <Text style={styles.txtEmail}>
                            Email: {auth.currentUser?.email}
                        </Text>
                    </View>
                    <View style={styles.ctnLogOut}>
                        <ChangePasswBtnProfile OnPress={changePassw} title={"Cambia la tua password!"}/>
                    </View>
                    <View style={styles.ctnLogOut}>
                        <ChangePasswBtnProfile title={"Esegui il LogOut!"} OnPress={logOut}/>
                    </View>
                </View>
                {/* Modale */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)} // Funzione per chiudere il modale
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>{modalMsg}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setShowModal(false)} // Chiude il modale
                            >
                                <Text style={styles.closeButtonText}>Chiudi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A1BCC1',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentEmail: {

    },
    txtEmail: {
        fontFamily: "Poppins-SemiBold",

    },
    ctnLogOut: {
        marginTop: 16,
    },
    ctnChangePasswAndLogOut: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#163440',
        width: 300,
        alignItems: 'stretch',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'rgba(202, 223, 226, 0.85)'

    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)", // Sfondo semi-trasparente
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: 300,
        height: 250,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
        fontFamily:"Poppins-Regular"
    },
    closeButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "white",
        fontSize: 18,
    },
})