import { StyleSheet, Text, View } from "react-native";

export default function AgradecimentoParticipacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.text}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F2873',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    marginVertical: 10,
  },
});