import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../../screen/home/Home';
import WeatherDetail from "../../../../screen/weatherDetail/weatherDetail"
import { NavigationContainer } from '@react-navigation/native';
export default function TabBottom() {
  const Tab = createBottomTabNavigator();
  return (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Detail" component={WeatherDetail} />
  </Tab.Navigator>
  </NavigationContainer>
  )
}
