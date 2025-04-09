import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { coffee } from "@/lib/sanity";

export function SmallCard({ nameofcoffee, image, price }: coffee) {

  return (
    <View style={styles.container}>
      <Image 
      source={{ uri: image }} 
      style={styles.image} 
      />

    <View style={styles.content}>
    <Text style={styles.label}>Kaffe:</Text>
        <Text style={styles.name}>{nameofcoffee}</Text>
        <Text style={styles.priceLabel}>Pris: </Text>
        <Text style={styles.price}>{price} kr</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    objectFit: 'contain', // This ensures the image fits within the container without stretching
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  }
});