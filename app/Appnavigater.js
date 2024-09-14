import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import Android from './Android'
import Home from './Home'
import Order from './Order'
import Tersimpan from './Tersimpan'
import Pesan from './Pesan'
import Notifcation from './Notifcation'
import Profile from './Profile'
import Search from './Search'
import Admin from './Admin'
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Android">
      <Stack.Screen name="Android" component={Android} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Tersimpan" component={Tersimpan} />
      <Stack.Screen name="Pesan" component={Pesan} />
      <Stack.Screen name="Notifcation" component={Notifcation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Admin" component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;