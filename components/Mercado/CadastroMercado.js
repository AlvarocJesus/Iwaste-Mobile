import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles';
import { db } from '../../config';

export function CadastroMercado(props) {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  let idUser = 1;

  const salvar = () => {
    db.ref('/usuarios').push({
      user,
      senha,
      name,
      cpf,
      cnpj,
      cep,
      uf,
      endereco,
      numero,
      cidade,
      id: idUser++
    });
    alert('salvo com sucesso');
  };

  const goToAbout = () => {
    props.navigation.navigate('Login');
  };

  const goAccess = () => {
    props.navigation.navigate('Todo');
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    
      <Text style={styles.title}>Cadastro Lojista</Text>

      <Image source={require('../../assets/user.png')} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuario"
        onChangeText={(text) => setUser(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF do Responsavel"
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        onChangeText={(text) => setCnpj(text)}
      />

      <Text style={styles.title}>Endereço da Loja</Text>

      <TextInput
        style={styles.input}
        placeholder="CEP"
        onChangeText={(text) => setCep(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        onChangeText={(text) => setUf(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={(text) => setEndereco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        onChangeText={(text) => setNumero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        onChangeText={(text) => setCidade(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          salvar();
        }}>
        <Text>Log In</Text>
      </TouchableOpacity>

      <Text style={{marginBottom:10}}>
        Já possui cadastro?
        <Text style={styles.link} onPress={() => goToAbout()}>
          Clique aqui
        </Text>
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
}
