import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Coleta() {

  const avaliacoes = [
    {
      id: 1,
      imagem: require('../../assets/images/pessimo.png'),
      texto: 'Péssimo',
    },
    {
      id: 2,
      imagem: require('../../assets/images/ruim.png'),
      texto: 'Ruim',
    },
    {
      id: 3,
      imagem: require('../../assets/images/neutro.png'),
      texto: 'Neutro',
    },
    {
      id: 4,
      imagem: require('../../assets/images/bom.png'),
      texto: 'Bom',
    },
    {
      id: 5,
      imagem: require('../../assets/images/excelente.png'),
      texto: 'Excelente',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.optionsContainer}>
        {avaliacoes.map((item) => (
          <TouchableOpacity key={item.id} style={styles.option}>
            <View style={[styles.iconContainer]}>
              <Image source={item.imagem} style={styles.icon} />
            </View>
            <Text style={styles.label}>{item.texto}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A2A6A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  option: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});