import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CartPage() {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://localhost:3000/orders')
      .then(response => {
        console.log('API Response:', response.data);
        setOrders(response.data.orders || []); // Lấy dữ liệu từ `orders`
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleRemoveOrder = (orderId) => {
    axios.delete(`http://localhost:3000/orders/${orderId}`)
      .then(response => {
        setOrders(orders.filter(order => order._id !== orderId));
      })
      .catch(error => {
        console.error('Error deleting order:', error);
      });
  };

  const handleQuantityChange = (orderId, action) => {
    const updatedOrders = orders.map(order => {
      if (order._id === orderId) {
        const updatedQuantity = action === 'increase' ? order.quantity + 1 : order.quantity - 1;
        if (updatedQuantity >= 1) {
          order.quantity = updatedQuantity;
          axios.put(`http://localhost:3000/orders/${orderId}`, { quantity: updatedQuantity })
            .then(response => {
              console.log('Quantity updated');
            })
            .catch(error => {
              console.error('Error updating quantity:', error);
            });
        }
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const calculateTotalPrice = () => {
    return orders.reduce((total, order) => total + (order.home.price * order.quantity), 0);
  };

  const handleCheckout = () => {
    // Đoạn mã xử lý thanh toán hoặc chuyển hướng
    console.log('Proceeding to checkout...');
    // navigation.navigate('CheckoutScreen'); // Ví dụ chuyển hướng tới màn hình thanh toán
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image 
        source={{ uri: `http://localhost:3000/${item.home.homeImage}` }} 
        style={styles.productImage} 
      />
      <View style={styles.orderDetails}>
        <Text style={styles.productName}>{item.home.name}</Text>
        <Text style={styles.productPrice}>{item.home.price.toLocaleString('vi-VN')} VND</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity 
          onPress={() => handleQuantityChange(item._id, 'decrease')} 
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity 
          onPress={() => handleQuantityChange(item._id, 'increase')} 
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handleRemoveOrder(item._id)}>
        <Ionicons name="trash-outline" size={24} color="#ff3b30" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart</Text>

      {orders.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={renderOrderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {orders.length > 0 && (
        <View style={styles.checkoutContainer}>
          <Text style={styles.totalPrice}>
            Total: {calculateTotalPrice().toLocaleString('vi-VN')} VND
          </Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 20,
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
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  productPrice: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
  },
  checkoutContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  totalPrice: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  quantityButton: {
    backgroundColor: '#444',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  quantityText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 10,
  },
});
