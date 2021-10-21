import React from "react";
import { FlatList, StyleSheet, SafeAreaView, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/core";
import { Header, ButtonDiario } from "../../components";
import data from "../../services/data";
import { DiarioProps } from "../../interfaces/Diario.interface";
import { DiarioTypes } from "../../types/ScreenStack.types";

export default function Home({ navigation }: DiarioTypes) {
  // const navigation = useNavigation();
  function handleAnimal(item: DiarioProps) {
    navigation.navigate("Diario", { ...item });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        hello="Olá"
        name="Usuário"
        image={require("../../../assets/img/usuario.png")}
      />
      <Text style={styles.message}>Mensagens do seu diário:</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ButtonDiario
              key={item.id}
              title={item.title}
              onPress={() => handleAnimal(item)}
              image={item.image}
            />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 110,
    marginTop: 10,
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});
