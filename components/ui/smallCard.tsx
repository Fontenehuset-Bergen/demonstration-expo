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
      <Text style={styles.name}>{nameofcoffee}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
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
    resizeMode: 'cover'
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#666',
  }
});