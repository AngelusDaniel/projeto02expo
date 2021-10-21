import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { Button, Header } from "../../components";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import {
  TextoParamProps,
  TextoPropsDiario,
} from "../../interfaces/Texto.interface";
import colors from "../../styles/colors";
import { DiarioTypes } from "../../types/ScreenStack.types";

export default function Texto({ navigation }: DiarioTypes) {
  const route = useRoute();
  const data = route.params as TextoParamProps;
  console.log({ ...data });
  const [nomeTexto, setNomeTexto] = useState(data.nome);
  const [dataTexto, setDataTexto] = useState(data.data);
  function nomeChange(item: string) {
    setNomeTexto(item);
  }
  function dataChange(item: string) {
    setDataTexto(item);
  }
  // const navigation = useNavigation();
  function handleAnimal() {
    navigation.navigate("Diario", { ...data });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name={data.title} image={data.image} />
      <Text style={styles.text}>Textos</Text>
      <TextInput
        style={styles.input}
        placeholder="nome"
        value={nomeTexto}
        onChangeText={(text) => nomeChange(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="dia/mês/ano"
        value={dataTexto}
        onChangeText={(text) => dataChange(text)}
      />
      <Button size="define" title="Salvar" onPress={handleAnimal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.black,
    fontSize: 16,
    padding: 10,
    width: "50%",
    marginTop: 20,
    marginBottom: 20,
  },
});
