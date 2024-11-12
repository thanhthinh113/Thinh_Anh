import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PageScreenViewProduct({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={{ uri: `http://localhost:3000/${product.homeImage}` }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString("vi-VN")} VND</Text>
        
        <View style={styles.authorSection}>
          <Image source={require("../images/userProfile.png")} style={styles.profileImage} />
          <Text style={styles.authorText}>{product.author}</Text>
        </View>

        <Text style={styles.description}>{product.address}</Text>
        <Text style={[styles.price,styles.tienich]}>Tiện ích</Text>
        <Text style={styles.description}>{product.title}</Text>
      </ScrollView>

      <TouchableOpacity style={styles.reserveButton} onPress={() => console.log('Reserve button clicked')}>
        <Text style={styles.reserveButtonText}>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    marginTop:30
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 8,
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'cover',
    marginVertical: 20,
    alignSelf:"center"
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 8,
  },
  price: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 15,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorText: {
    color: '#ddd',
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    color: '#aaa',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 12,
    textAlign: 'justify',
  },
  reserveButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007aff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  tienich:{
    marginTop:10
  }
});
