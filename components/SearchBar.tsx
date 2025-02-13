import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
    return (<View style={styles.container}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
            style={styles.input}
            placeholder="Search notes"
            placeholderTextColor="#999" />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 16,
    },
    input: { flex: 1, marginLeft: 8, paddingVertical: 10 },
});

export default SearchBar;