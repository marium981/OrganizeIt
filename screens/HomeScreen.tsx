import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import FloatingActionButton from "../components/FloatingActionButton";
import NoteCard from "../components/NoteCard";
import { useTheme } from "@react-navigation/native";

const notes = [
    { id: "1", title: "Weekly Schedule", type: "task", updatedAt: "Yesterday" },
    { id: "2", title: "Secret Chamber", type: "locked", updatedAt: "Aug 2022" },
    // Add more mock data...
];


const HomeScreen = () => {
    const {colors} = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={styles.title}>Organize It!</Text>
            <SearchBar />
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NoteCard note={item} />}
                numColumns={2}
                contentContainerStyle={styles.noteGrid}
            />
            <FloatingActionButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16},
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 16, marginTop: 15 },
    noteGrid: { paddingBottom: 100 },
});

export default HomeScreen;