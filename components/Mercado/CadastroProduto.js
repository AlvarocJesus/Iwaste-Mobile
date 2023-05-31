import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../../styles';
import { db, storage } from '../../config';

export function CadastroProduto() {
  const [produto, setProduto] = useState('');
  const [validade, setValidade] = useState('');
  const [preco, setPreco] = useState(0);
  const [qtd, setQtd] = useState(0);
  const [imagem, setImagem] = useState('');

  const salvarProduto = () => {
    console.log('produto salvo');
    console.log({ produto, qtd, validade, imagem, preco });
    uploadImage();
    db.ref('/produto').push({
      produto,
      qtd,
      validade,
      imagem,
      preco,
      idMercado: 1,
    });
    alert('salvo com sucesso');
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    console.log('entrou no upload');

    console.log({ imagem });
    const response = await fetch(uri);
    console.log({ response });
    const storageRef = storage.ref(storage, imagem);

    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, file);
    if (snapshot) console.log('salvo com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Produto</Text>

      <TextInput
        placeholder="Nome do Produto"
        style={styles.input}
        onChangeText={(text) => setProduto(text)}
      />
      <TextInput
        placeholder="Quantidade"
        style={styles.input}
        onChangeText={(text) => setQtd(parseInt(text))}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="Validade"
        style={styles.input}
        onChangeText={(text) => setValidade(text)}
      />

      <TextInput
        placeholder="Preço"
        style={styles.input}
        onChangeText={(text) => setPreco(parseFloat(text))}
      />

      <TouchableOpacity
        style={{margin:10}}
        onPress={pickImage}>
        <Text>Importar Imagem</Text>
      </TouchableOpacity>
      {imagem && (
        <Image source={{ uri: imagem }} style={{ width: 200, height: 200 ,marginBottom:10}} />
      )}

      <TouchableOpacity style={styles.button} onPress={() => salvarProduto()}>
        <Text>Cadastrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}
