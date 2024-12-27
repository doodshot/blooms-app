import Home from "../ui/screens/RegisterLogin";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Splash from "../ui/screens/Splash";
import RegisterLogin from "../ui/screens/RegisterLogin";
import Login from "../ui/screens/Login";
import Register from "../ui/screens/Register";
import HomePage from "../ui/screens/HomePage";
import TabNavigator from "./tab.navigator";

const Stack = createNativeStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"splash"} component={Splash}/>
            <Stack.Screen name={"RegisterLogin"} component={RegisterLogin}/>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Register"} component={Register}/>
            <Stack.Screen name={"TabNavigator"} component={TabNavigator}/>
            <Stack.Screen name={"HomePage"} component={HomePage}/>
        </Stack.Navigator>
    )
}