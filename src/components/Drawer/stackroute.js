import React ,{Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../components/Home/Home'
import Login from '../Login/Login';
import {createDrawerNavigator} from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export class Stackroute extends Component{

  render(){
    return(
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sign Up">   
      <Stack.Screen name="Sign Up" 
      component={Login} 
      options={{ swipeEnabled: false }}

        />

      <Stack.Screen name="Home"
       component={Home}
        />
    
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}

export default Stackroute
