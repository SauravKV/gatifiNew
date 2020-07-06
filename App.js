import React from 'react';
import Stackroute from './src/Screens/Drawer/stackroute';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import allReducers from './src/Store/ConfigureStore'
const store=createStore(allReducers);


export default class App extends React.Component {


  render(){  
    return (
      <Provider store = { store }>
      <Stackroute />
      </Provider>
    );
  }
  
}