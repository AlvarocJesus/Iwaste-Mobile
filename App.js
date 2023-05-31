import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CadastroUser } from './components/User/CadastroUser';
import { CadastroMercado } from './components/Mercado/CadastroMercado';
import { NavigateLoginHome } from './components/NavigateLoginHome';

const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Navegacao.Screen
          name="NavigateLoginHome"
          component={NavigateLoginHome}
          navigation={Navegacao}
        />
        <Navegacao.Screen
          name="CadastroUser"
          component={CadastroUser}
          navigation={Navegacao}
        />
        <Navegacao.Screen
          name="CadastroMercado"
          component={CadastroMercado}
          navigation={Navegacao}
        />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
