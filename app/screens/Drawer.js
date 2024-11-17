import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

const DrawerNavigator = createDrawerNavigator(); 
const Stack = createStackNavigator();

export default function Drawer() {
  return (
    <DrawerNavigator.Navigator screenOptions={{ headerShown: false }}>
      <DrawerNavigator.Screen name="Home" component={Home} />
    </DrawerNavigator.Navigator>
  );
}
