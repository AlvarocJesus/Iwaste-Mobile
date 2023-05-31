import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { ListarProdutos } from './Mercado/ListarProdutos';
import { CadastroProduto } from './Mercado/CadastroProduto';
import { HomeTotal } from './HomeTotal';
import { Login } from './Login';

const Navegacao = createDrawerNavigator();

export function Home(props) {
  console.log(props);

  return (
    <Navegacao.Navigator useLegacyImplementation>
      <Navegacao.Screen name="Iwaste" component={HomeTotal} />

      {props.route.params ? (
        <Navegacao.Screen name="ListarProdutos" component={ListarProdutos} />
      ) : (
        <Navegacao.Group>
          <Navegacao.Screen name="ListarProdutos" component={ListarProdutos} />
          <Navegacao.Screen
            name="CadastroProduto"
            component={CadastroProduto}
          />
        </Navegacao.Group>
      )}
    </Navegacao.Navigator>
  );
}
