import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/Reducers';
import Home from './src/telas/Home';
import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';


console.disableYellowBox = true;

let store = createStore(Reducers);

const Navegador = createStackNavigator({
  Home: { screen: Home },
  Cadastro: { screen: Cadastro },
  Login: { screen: Login },

});

const AppContainer = createAppContainer(Navegador);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}