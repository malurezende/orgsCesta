import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../componentes/Texto";
import logo from "../../../assets/logo.png";

export default function Detalhes() {
  return (
    <>
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>Andrade e Rezende Farm</Texto>
      </View>
      <Texto style={estilos.descricao}>
        Uma cesta com produtos cuidadosamente selecionados da fazenda para sua
        casa
      </Texto>
      <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
