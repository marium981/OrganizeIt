import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const FloatingActionButton = () => {
  const {colors} = useTheme();


  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]}>
      <Ionicons name="add" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 50,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
});

export default FloatingActionButton;
