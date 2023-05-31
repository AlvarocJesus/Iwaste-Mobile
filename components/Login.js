import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { db } from '../config';
import { styles } from '../styles';

export function Login(props) {
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(false);

  const buscar = () => {
    db.ref('/usuarios')
      .orderByChild('name')
      .equalTo(name)
      .once('value', (snapshot) => {
        let data = snapshot.val();
        if (data == null) {
          alert('Usuário ou senha incorretos!');
        } else {
          let dados = Object.values(data);
          if (dados[0].senha !== senha) alert('Usuário ou senha incorretos!');

          if (!dados[0].cnpj) goAccess('Home', true);
          else goAccess('Home', false);
        }
      });
  };

  const goToAbout = (cadastro) => {
    props.navigation.navigate(cadastro);
  };

  const goAccess = (tela, status) => {
    props.navigation.navigate(tela, status);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Image source={require('../assets/user.png')} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => buscar()}>
        <Text>Log In</Text>
      </TouchableOpacity>

      <Text style={{marginBottom:10}}>
        Cadastre-se,
        <Text style={styles.link} onPress={() => goToAbout('CadastroMercado')}>
          sou lojista
        </Text>
      </Text>
      <Text style={{marginBottom:10}}>
        Cadastre-se,
        <Text style={styles.link} onPress={() => goToAbout('CadastroUser')}>
          sou consumidor
        </Text>
      </Text>
    </View>
  );
}
