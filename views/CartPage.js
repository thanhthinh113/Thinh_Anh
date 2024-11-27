import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CartPage = () => {
  const navigation = useNavigation();

  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 20.0,
      productImage: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.5,
      productImage: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.0,
      productImage: 'https://via.placeholder.com/80',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cartItem} 
      onPress={() => navigation.navigate('CheckoutPage', { product: item })}
    >
      <Image source={{ uri: item.productImage }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity>
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 20,
    paddingTop: 70,
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#444',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  price: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: '600',
  },
  remove: {
    color: '#FF3B30',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartPage;
