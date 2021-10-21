import React from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native";
import { Header, Textos, ButtonText } from "../../components";
import { DiarioProps } from "../../interfaces/Diario.interface";
import { TextoParamProps } from "../../interfaces/Texto.interface";
import { DiarioTypes } from "../../types/ScreenStack.types";

export default function Diario({ navigation }: DiarioTypes) {
  const route = useRoute();
  const data = route.params as DiarioProps;
  // const navigation = useNavigation();

  function handleTextoDiario() {
    navigation.navigate("Diario", { ...data });
  }

  function textoEdit(item: TextoParamProps) {
    navigation.navigate("Diario", { ...data, ...item });
  }
  function textoRemove(item: TextoParamProps) {
    console.log("Texto", { ...data, ...item });
  }
  function voltar() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Header name={data.title} image={data.image} />
      <Textos
        title="Texto"
        onPress={handleTextoDiario}
        buttonEdit={textoEdit}
        buttonRemove={textoRemove}
        texto={data.textos}
      />
      <ButtonText title="Voltar" onPress={voltar} />
    </SafeAreaView>
  );
}
