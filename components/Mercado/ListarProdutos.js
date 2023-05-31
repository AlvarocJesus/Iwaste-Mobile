import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../../styles';
import { DisplayProduto } from './DisplayProduto';
import { db } from '../../config';

export function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  const componentDidMount = () => {
    db.ref('/produto').on('value', (snapshot) => {
      let data = snapshot.val();

      let dados = Object.values(data);

      setProdutos(dados);
    });
  };

  useEffect(() => componentDidMount(), []);

  return (
    <View
      style={[
        styles.container,
        { justifyContent: 'flex-start', alignItems: 'baseline' },
      ]}>
      <Text style={styles.title}>Produtos</Text>

      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
          }}>
          {produtos.length > 0 ? (
            <FlatList
              data={produtos}
              renderItem={({ item }) => <DisplayProduto produto={item} />}
            />
          ) : (
            <Text>Nenhum produto perto de você</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
