import Home from "../ui/screens/RegisterLogin";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Splash from "../ui/screens/Splash";
import RegisterLogin from "../ui/screens/RegisterLogin";
import Login from "../ui/screens/Login";
import Register from "../ui/screens/Register";
import PlayPage from "../ui/screens/PlayPage";
import TabNavigator from "./tab.navigator";
import MapPage from "../ui/screens/MapPage";
import Profile from "../ui/screens/Profile";
import BadgePage from "../ui/screens/BadgePage";
import HomePage from "../ui/screens/HomePage";
import QuizScreen from "../ui/screens/QuizScreen";

export type RootStackParamList = {
    splash: undefined;
    RegisterLogin: undefined;
    Login: undefined;
    Register: undefined;
    TabNavigator: undefined;
    PlayPage: undefined;
    MapPage: undefined;
    Profile: undefined;
    BadgePage: undefined;
    HomePage: undefined;
    QuizPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"splash"} component={Splash}/>
            <Stack.Screen name={"RegisterLogin"} component={RegisterLogin}/>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Register"} component={Register}/>
            <Stack.Screen name={"TabNavigator"} component={TabNavigator}/>
            <Stack.Screen name={"PlayPage"} component={PlayPage}/>
            <Stack.Screen name={"MapPage"} component={MapPage}/>
            <Stack.Screen name={"Profile"} component={Profile}/>
            <Stack.Screen name={"BadgePage"} component={BadgePage}/>
            <Stack.Screen name={"HomePage"} component={HomePage}/>
            <Stack.Screen name={"QuizPage"} component={QuizScreen}/>
        </Stack.Navigator>
    )
}