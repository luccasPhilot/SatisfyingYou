import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import CardsAcoesPesquisa from '../components/CardsAcoesPesquisa';


export default function AcoesPesquisa() {

  
  const cardsData = [
    {
      id: 1,
      imagem: require('../../assets/images/modificar.png'),
      texto: 'Modificar'
    },
    {
      id: 2,
      imagem: require('../../assets/images/coleta.png'),
      texto: 'Coletar dados'
    },
    {
      id: 3,
      imagem: require('../../assets/images/relatorio.png'),
      texto: 'Relatório'
    },
  ]

  return (
    <View style={[styles.fundo]}>
      <View style={[styles.viewRowTitle]}>
        <Image style={{ height: 50, width: 50, tintColor:'#573FBA' }} source={require('../../assets/images/arrow.png')} />
        <Text style={[styles.textTitle]}>Carnaval</Text>
      </View>

      <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
        >
          {cardsData.map(item => (
            <CardsAcoesPesquisa
              key={item.id}
              texto={item.texto}
              imagem={item.imagem}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A2A6A',
    padding: 16,
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  fundo: {
    backgroundColor: '#372775',
    flex: 1
  },
  viewRowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 0.1,
    backgroundColor: '#2B1D62'
  },
  textTitle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    color: 'white'
  }
});