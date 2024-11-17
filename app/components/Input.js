import { TextInput, Text, StyleSheet, View, Image } from "react-native";
import { useState } from "react";

const Input = (props) => {
  const {
    corFundo,
    corTexto,
    fonteTexto,
    texto,
    ehSenha,
    icone,
    corTextoTopo,
    tamanhoTextoTopo,
  } = props;

  const [textoInserido, setTexto] = useState("");

  return (
    <View style={styles.view}>
      <Text style={[{ color: corTextoTopo, fontFamily: fonteTexto, fontSize: tamanhoTextoTopo }]}>
        {texto}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={[styles.input,{ color: corTexto, fontFamily: fonteTexto, backgroundColor: corFundo }]} value={textoInserido} onChangeText={setTexto} secureTextEntry={ehSenha}/>
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
    width: 20,
    height: 20,
    tintColor: 'gray',
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  inputContainer: {
    position: 'relative',
    width: 375
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingRight: 30,
  },
});

export default Input;
