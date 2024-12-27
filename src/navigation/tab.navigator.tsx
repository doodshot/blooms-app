import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "../ui/screens/HomePage";


const tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <tab.Navigator initialRouteName="tab">
            <tab.Screen name={"HomePage"} component={HomePage} />
        </tab.Navigator>
    )
}