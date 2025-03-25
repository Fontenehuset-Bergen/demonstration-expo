import { Drinks, getDrinks } from "@/libs/sanity/client";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DrinkCard } from "../components/drinkCard";

export default function Kafe() {
  const [content, setContent] = useState<Drinks[]>([]);
  const [loading, setLoading] = useState(true);

  async function updateContent() {
    try {
      const drinks = await getDrinks();
      setContent(drinks);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    updateContent();
  }, []);

  return (
    <View style={style.container}>
      <Text style={{ padding: 24 }}>
        Her er litt innhold som blir hentet fra sanity, dette eksempelet viser
        lett hvordan vi laster inn data og viser dette dynamisk i applikasjonen
      </Text>
      <DrinkCard/>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView contentContainerStyle={style.content}>
          {content.map((drink, index) => (
            <View
              key={index}
              style={style.card}
            >
              <Image
                source={{ uri: drink.image }}
                style={style.cardImage}
              />
              <View style={style.cardText}>
                <Text style={{ fontWeight: "bold" }}>{drink.title}</Text>
                <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                  {drink.beskrivelse}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    gap: 10,
  },
  card: {
    flex: 1,
    display: "flex",
    width: "90%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },
  cardText: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
