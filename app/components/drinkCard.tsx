import { StyleSheet, Pressable, View, Image, Text } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function DrinkCard() {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}></Image>
        <Text style={styles.drinkName}>Cappuccino</Text>
        <Text style={styles.drinkDescription} numberOfLines={2}>En espressobasert kaffedrikk som tilberedes med steamet melk, inkludert et lag av melkeskum.</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.price}>30kr</Text>
          <Pressable
          style={({ pressed }) => [
            styles.plusButton,
            { backgroundColor: pressed ? '#DC9867' : '#D37942'}]}>

            <MaterialIcons name="add" color="#fff" size={25} />
         </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#302014',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
    elevation: 2,
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    backgroundColor: '#EFDAF8',
    padding: 10,
    elevation: 2,
    objectFit: 'cover',
  },
  drinkName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#D37942',
    elevation: 2,
  },
  drinkDescription: {
    color: '#DBC4B6',
    marginBottom: 2,
  },
  infoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 2,

  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F9E7DD',
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#D37942',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  }

})
