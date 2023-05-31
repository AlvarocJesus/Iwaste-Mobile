import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#A8B16B',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 149.33,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    fontSize: 22,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    width: 270,
    padding:10,
    borderRadius:30,
    marginBottom:10,
    opacity: 0.3
    },
  button: {
    backgroundColor: '#4E6424',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  },
  link: {
    color: 'blue',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    margin:20
  },
  containerProduto: {
    width: 160,
    backgroundColor: '#FDD282',
    margin: 9,
  },
  imagemProduto: {
    marginTop: 12,
    width: 130,
    height: 70,
    resizeMode: 'center',
  },
  heading1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    margin: 20,
  },
  heading2: {
    color: "#fff",
    margin: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  heading3: {
    color: "#fff",
    margin: 5,
  },
  preco: {  margin:10, textAlign: 'right' },
});
