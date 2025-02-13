import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoteCard = ({ note }: { note: { title: string; updatedAt: string } }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.date}>{note.updatedAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  title: { fontWeight: "bold", fontSize: 16 },
  date: { marginTop: 8, fontSize: 12, color: "#999" },
});

export default NoteCard;
