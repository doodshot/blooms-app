import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "../ui/screens/HomePage";
import MapPage from "../ui/screens/MapPage";
import {Image, View} from "react-native";
import Profile from "../ui/screens/Profile";
import BadgePage from "../ui/screens/BadgePage";
const tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <View style={{flex: 1, backgroundColor: "#163440"}}> // Imposta lo sfondo della barra delle schede come trasparente
            <tab.Navigator
                initialRouteName="HomePage"
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "rgba(202, 223, 226, 0.85)",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopWidth: 0,
                        height: 65,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        width: 350,
                        alignSelf: "center",
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                        elevation: 5, // Ombra per Android
                        marginBottom: 25,

                    },
                    tabBarBackground: () => (
                        <View style={{flex: 1, backgroundColor: 'transparent'}}/> // Imposta lo sfondo della barra delle schede come trasparente
                    ),
                    tabBarIcon: ({focused}) => {
                        let iconSource;
                        if (route.name === "HomePage") {
                            iconSource = focused
                                ? require("../../assets/icons/home-selected.png")
                                : require("../../assets/icons/home.png");
                        } else if (route.name === "MapPage") {
                            iconSource = focused
                                ? require("../../assets/icons/map-selected.png")
                                : require("../../assets/icons/map.png");
                        } else if (route.name === 'Profile') {
                            iconSource = focused
                                ? require("../../assets/icons/profile-selected.png")
                                : require("../../assets/icons/profile.png");
                        } else if (route.name === 'BadgePage') {
                            iconSource = focused
                                ? require("../../assets/icons/badge-selected.png")
                                : require("../../assets/icons/badge.png");
                        }
                        return (
                            <Image
                                source={iconSource}
                                style={{
                                    width: 39,
                                    height: 32,
                                    resizeMode: "contain",
                                    paddingTop: 10,
                                    marginTop: 15,
                                }}
                            />
                        );
                    },
                    //
                })}>
                <tab.Screen name={"HomePage"} component={HomePage}/>
                <tab.Screen name={"MapPage"} component={MapPage}/>
                <tab.Screen name={"Profile"} component={Profile}/>
                <tab.Screen name={"BadgePage"} component={BadgePage}/>
            </tab.Navigator>
        </View>
    )
}