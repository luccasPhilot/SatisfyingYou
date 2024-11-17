import { TextInput, Text, StyleSheet, View, Image } from "react-native";

const InputImage = (props) => {
  const {
    corTexto,
    fonteTexto,
    textoTopo,
    icone,
    corTextoTopo,
    tamanhoTextoTopo,
    textoInterno
  } = props;

  return (
    <View style={styles.view}>
      <Text style={[{ color: corTextoTopo, fontFamily: fonteTexto, fontSize: tamanhoTextoTopo }]}>
        {textoTopo}
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[{color: corTexto}]}>{textoInterno}</Text>
        {icone && <Image source={icone} style={styles.imagem} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 5,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  imagem: {
    width: 50,
    height: 50,
    tintColor: '#C60EB3',
  },
  inputContainer: {
    width: 200,
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingRight: 30,
  },
});

export default InputImage;
