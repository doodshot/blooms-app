import Home from "../ui/screens/RegisterLogin";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Splash from "../ui/screens/Splash";
import RegisterLogin from "../ui/screens/RegisterLogin";
import Login from "../ui/screens/Login";
import Register from "../ui/screens/Register";

const Stack = createNativeStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"splash"} component={Splash}/>
            <Stack.Screen name={"RegisterLogin"} component={RegisterLogin}/>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Register"} component={Register}/>

        </Stack.Navigator>
    )
}