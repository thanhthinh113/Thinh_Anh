import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';  // Added icons for payment methods

export default function CheckoutPage({ route, navigation }) {
  const { orders, totalPrice } = route.params;  // Receive orders and total price from CartPage
  const [fullName, setFullName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [discount, setDiscount] = useState(0);  // Discount based on coupon

  // Calculate the final price after applying coupon
  const calculateFinalPrice = () => {
    return totalPrice - discount;
  };

  const handlePlaceOrder = () => {
    if (!fullName || !shippingAddress) {
      alert('Please enter all required fields.');
      return;
    }

    // Handle order placement (you can integrate an API for order placement here)
    alert('Order successfully placed!');
    navigation.goBack();  // Optionally navigate back after placing order
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderItemText}>{item.home.name} (x{item.quantity})</Text>
      <Text style={styles.orderItemText}>{(item.home.price * item.quantity).toLocaleString('vi-VN')} VND</Text>
    </View>
  );

  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <FlatList
      data={[{ key: 'Shipping Info' }, { key: 'Order Summary' }, { key: 'Payment Methods' }, { key: 'Final Price' }, { key: 'Place Order' }]}  // Dummy data to show sections
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        if (item.key === 'Shipping Info') {
          return (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Shipping Information</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#aaa"
                value={fullName}
                onChangeText={setFullName}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your shipping address"
                placeholderTextColor="#aaa"
                value={shippingAddress}
                onChangeText={setShippingAddress}
              />
            </View>
          );
        }

        if (item.key === 'Order Summary') {
          return (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Order Summary</Text>
              <FlatList
                data={orders}
                keyExtractor={(order) => order._id}
                renderItem={renderOrderItem}
              />
              <Text style={styles.totalPrice}>Total Price: {totalPrice.toLocaleString('vi-VN')} VND</Text>
            </View>
          );
        }

        if (item.key === 'Payment Methods') {
          return (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Payment Method</Text>
              <View style={styles.paymentMethods}>
                <TouchableOpacity
                  style={[styles.paymentMethod, paymentMethod === 'Cash on Delivery' && styles.selectedPayment]}
                  onPress={() => setPaymentMethod('Cash on Delivery')}
                >
                  <Ionicons name="cash" size={24} color="#333" />
                  <Text style={styles.paymentMethodText}>Cash on Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.paymentMethod, paymentMethod === 'Credit Card' && styles.selectedPayment]}
                  onPress={() => setPaymentMethod('Credit Card')}
                >
                  <FontAwesome name="credit-card" size={24} color="#333" />
                  <Text style={styles.paymentMethodText}>Credit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.paymentMethod, paymentMethod === 'Paypal' && styles.selectedPayment]}
                  onPress={() => setPaymentMethod('Paypal')}
                >
                  <FontAwesome name="paypal" size={24} color="#333" />
                  <Text style={styles.paymentMethodText}>PayPal</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }

        if (item.key === 'Final Price') {
          return (
            <View style={styles.section}>
              <Text style={styles.finalPrice}>Final Price: {calculateFinalPrice().toLocaleString('vi-VN')} VND</Text>
            </View>
          );
        }

        if (item.key === 'Place Order') {
          return (
            <View style={styles.section}>
              <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
                <Text style={styles.placeOrderText}>Place Order</Text>
              </TouchableOpacity>
            </View>
          );
        }
      }}
    />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingTop: 30,
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
  section: {
    paddingBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop:20
  },
  sectionTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    color: '#333',
    fontSize: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderItemText: {
    fontSize: 16,
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginTop: 10,
  },
  paymentMethods: {
    marginTop: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedPayment: {
    borderColor: '#28a745',
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  finalPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginTop: 20,
  },
  placeOrderButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
