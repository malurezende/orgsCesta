import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  let estiloPadrao = estilos.texto;

  if (style?.fontweight === "bold") {
    estiloPadrao = estilos.textoNegrito;
  }

  return <Text style={[style, estiloPadrao]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontSerratRegular",
    fontweight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontSerratBold",
    fontweight: "normal",
  },
});
