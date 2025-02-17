import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PlayPage from "../ui/screens/PlayPage";
import MapPage from "../ui/screens/MapPage";
import {Image, View} from "react-native";
import Profile from "../ui/screens/Profile";
import BadgePage from "../ui/screens/BadgePage";
import HomePage from "../ui/screens/HomePage";
const tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <View style={{flex: 1, backgroundColor: "#A1BCC1"}}>
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
                        borderRadius: 25,
                        shadowColor: "#A1BCC1",
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 10,
                        marginBottom: 25,

                    },
                    tabBarBackground: () => (
                        <View style={{flex: 1, backgroundColor: 'transparent'}}/>
                    ),
                    tabBarIcon: ({focused}) => {
                        let iconSource;
                        if (route.name === "HomePage") {
                            iconSource = focused
                                ? require("../../assets/icons/house-selected.png")
                                : require("../../assets/icons/house.png");
                        } else if (route.name === "MapPage") {
                            iconSource = focused
                                ? require("../../assets/icons/map-selected.png")
                                : require("../../assets/icons/map.png");
                        } else if (route.name === 'PlayPage') {
                            iconSource = focused
                                ? require("../../assets/icons/home-selected.png")
                                : require("../../assets/icons/home.png");
                        } else if (route.name === 'BadgePage') {
                            iconSource = focused
                                ? require("../../assets/icons/badge-selected.png")
                                : require("../../assets/icons/badge.png");
                        } else if (route.name === 'Profile') {
                            iconSource = focused
                                ? require("../../assets/icons/profile-selected.png")
                                : require("../../assets/icons/profile.png");
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

                })}>
                <tab.Screen name={"PlayPage"} component={PlayPage}/>
                <tab.Screen name={"MapPage"} component={MapPage}/>
                <tab.Screen name={"HomePage"} component={HomePage}/>
                <tab.Screen name={"BadgePage"} component={BadgePage}/>
                <tab.Screen name={"Profile"} component={Profile}/>
            </tab.Navigator>
        </View>
    )
}