import React ,{Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../Screens/Home/Home'
import Login from '../Login/Login';
import AddAptFromSearch from '../AddApartmentBySearch/AddAptBySearch'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RegistrationOne} from '../Registration/RegistrationOne'
import {RegistrationTwo} from '../Registration/RegistrationTwo'
import {RegistrationFour} from '../Registration/RegistrationFour'
import {RegistrationThird} from '../Registration/RegistrationThird'
import {RegistrationFive} from '../Registration/RegistrationFive'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export class Stackroute extends Component{

  render(){
    return(
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Registraion one">   
      <Stack.Screen name="Sign Up" 
      component={Login} 
      options={{ swipeEnabled: false }}

        />

      <Stack.Screen name="Home"
       component={Home}
       options={{ swipeEnabled: false }}
        />
      <Stack.Screen name="AddAptFromSearch"
        component={AddAptFromSearch}
        options={{ swipeEnabled: false }}
        />  
      <Stack.Screen name="Registraion one"
        component={RegistrationOne}
        options={{ swipeEnabled: false }}
      /> 
      <Stack.Screen name="Registraion Two"
        component={RegistrationTwo}
        options={{ swipeEnabled: false }}
      />   
      <Stack.Screen name="RegistrationFour"
        component={RegistrationFour}
        options={{ swipeEnabled: false }}
      /> 
      <Stack.Screen name="RegistrationThird"
        component={RegistrationThird}
        options={{ swipeEnabled: false }}
      />  
      <Stack.Screen name="RegistrationFive"
        component={RegistrationFive}
        options={{ swipeEnabled: false }}
      />    
    
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}

export default Stackroute
