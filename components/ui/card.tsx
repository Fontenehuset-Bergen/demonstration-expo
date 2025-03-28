import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CardProps {
  title: string;
  beskrivelse: string;
  allergens: string[];
  image: string;
}

// Fordi dette er en komponent, eksporteres den med kun "export function Name()"
export function Card({ title, beskrivelse, allergens, image }: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.drinkName}>{title}</Text>
        <Text style={styles.drinkDescription} numberOfLines={2}>
          {beskrivelse}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.price}>{allergens.join(", ")}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.plusButton,
              { backgroundColor: pressed ? "#DC9867" : "#D37942" },
            ]}
          >
            <MaterialIcons name="add" color="#fff" size={25} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#302014",
    padding: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
    elevation: 10,
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 20,
    backgroundColor: "#EFDAF8",
    padding: 10,
    elevation: 2,
    objectFit: "cover",
  },
  drinkName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D37942",
    elevation: 2,
  },
  drinkDescription: {
    color: "#DBC4B6",
    marginBottom: 2,
  },
  infoContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: 2,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#F9E7DD",
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#D37942",
    justifyContent: "center",
    alignItems: "center",
  },
});
