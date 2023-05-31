import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../styles';

export function DisplayProduto({ produto }) {
  return (
    <View style={styles.containerProduto}>
      <Text style={{ marginTop: 10, marginLeft: 5 }}>{produto.produto}</Text>
      <Text style={{ marginTop: 10, marginLeft: 5 }}>
        Válido até {produto.validade}
      </Text>
      <Image
        source={require('../../assets/queijo.jpg')}
        style={styles.imagemProduto}
      />
      <Text style={styles.preco}> R$ {produto.qtd}</Text>
    </View>
  );
}
