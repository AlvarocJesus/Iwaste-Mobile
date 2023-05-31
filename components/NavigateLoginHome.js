import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './Login';
import { Home } from './Home';

const Navegacao = createStackNavigator();

export function NavigateLoginHome() {
  return (
    <Navegacao.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      {
                
      }
      <Navegacao.Screen name="Login" component={Login} navigation={Navegacao} />
      <Navegacao.Screen name="Home" component={Home} navigation={Navegacao} />
    </Navegacao.Navigator>
  );
}
