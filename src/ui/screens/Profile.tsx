import {View, Text, SafeAreaView, StyleSheet, Modal, TouchableOpacity, Image, TextInput} from "react-native";
import { ChangePasswBtnProfile } from "../components/ChangePasswBtnProfile";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import "firebase/auth"; // ringraziamo stackoverflow 🙏🙏🙏🙏🙏🙏🙏
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import {useEffect, useState} from "react";
import { Picker } from "@react-native-picker/picker";

export default function Profile() {
    //UseNavigation
    const nav = useNavigation();
    //UseState
    const [showModal, setShowModal] = useState(false);
    const [modalMsg, setModalMsg] = useState("");
    const [email, setEmail] = useState("");

    // Recupera l'email dell'utente autenticato quando il componente viene montato
    useEffect(() => {
        if (auth.currentUser?.email) {
            setEmail(auth.currentUser.email);
        }
    }, []);
    //Business Logic
    const changePassw = async () => {
        // Controllo se l'email è nulla
        if (!auth.currentUser?.email) {
            return;
        }
        try {
            await sendPasswordResetEmail(auth, auth.currentUser.email);
            setShowModal(true);
            setModalMsg("Ti abbiamo inviato una mail per cambiare la password!");
        } catch (error) {
            console.log(error);
            setModalMsg("Errore nell'invio della mail per cambiare la password!");
            setShowModal(false);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            nav.reset({
                index: 0,
                routes: [{ name: "RegisterLogin" }], // Da errore ma funziona
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}></Text>
            </View>
            {/* Foto profilo */}
            <View style={styles.profileContainer}>
                <Image
                    source={require("../../../assets/placeholfer-logo-profile.png")}
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.editIcon}>
                    <Text style={styles.editIconText}>✏️</Text>
                </TouchableOpacity>
            </View>

            {/* Contenuto del profilo */}
            <View style={styles.ctnChangePasswAndLogOut}>
                <View style={styles.contentEmail}>

                    <Text style={styles.txt1}>
                        Modifica il tuo profilo
                    </Text>

                    <View style={{marginTop: 10}}>
                    <Text style={styles.txtOnEditText}> Email </Text>
                    <TextInput style={styles.txtInput}  placeholderTextColor={"#16344090"} onChangeText={setEmail} value={email} editable={false}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Text style={styles.txtOnEditText}> Nome </Text>
                    <TextInput style={styles.txtInput} placeholder={"Bloom"} placeholderTextColor={"#16344090"}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Text style={styles.txtOnEditText}> Cognome </Text>
                    <TextInput style={styles.txtInput} placeholder={"Nets"} placeholderTextColor={"#16344090"}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Text style={styles.txtOnEditText}> Username </Text>
                    <TextInput style={styles.txtInput} placeholder={"Bloom01"} placeholderTextColor={"#16344090"}/>
                    </View>

                    <View style={{marginTop: 10}}>
                    <Text style={styles.txtOnEditText}> Genere </Text>
                    <TextInput style={styles.txtInput} placeholder={"Maschio"} placeholderTextColor={"#16344090"}/>
                    </View>
                    <ChangePasswBtnProfile
                        OnPress={changePassw}
                        title={"Cambia la tua password!"}
                    />
                </View>
            </View>

            {/* Modale */}
            <Modal
                animationType="fade"
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    backButton: {
        marginRight: 10,
    },
    backButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "Poppins-SemiBold",
        color: "#163440",
        fontWeight: "bold",
    },
    profileContainer: {
        alignItems: "center",
        marginVertical: 20,
        justifyContent: "center",
        position: "relative",
        marginTop: -15,
        zIndex: 2,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "#fff",
        backgroundColor: "#fff",
    },
    editIcon: {
        position: "absolute",
        bottom: 0,
        right: 130,
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 6,
        elevation: 4,
    },
    editIconText: {
        fontSize: 16,
        color: "#163440",
    },
    ctnChangePasswAndLogOut: {
        width: "100%",
        height: "100%",
        padding: 20,
        borderRadius: 20,
        borderWidth: 0,
        backgroundColor:"#A1BCC1",
        marginTop: -40, // Solleva il contenitore verso la foto
        zIndex: 1,
        alignItems: "center",

    },
    contentEmail: {
        marginBottom: 16,
    },
    txt1: {
        marginTop: 16,
        fontFamily:"Poppins-SemiBold",
        fontSize: 28
    },
    txtOnEditText: {
        fontFamily: "Poppins-Regular",
        color: "#163440",
    },
    txtInput: {
        width: 260,
        padding: 10,
        borderWidth: 1,
        borderColor: "#163440",
        borderRadius: 20,
    },
    txtEmail: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
        color: "#163440",
        textAlign: "center",
    },
    ctnButtons: {
        marginTop: 16,
        width: 260,
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
        fontFamily: "Poppins-Regular",
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
    label: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "#163440",
        marginBottom: 8,
    },
    picker: {
        borderWidth: 1,
        borderColor: "#A1BCC1",
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        color: "#163440",
    },
});