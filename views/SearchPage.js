import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Added icons for payment methods

export default function SearchPage({ route, navigation }) {
  const { query, data } = route.params;

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() =>
        navigation.navigate("PageScreenViewProduct", { product: item })
      }>
      <Image source={{ uri: `http://localhost:3000/${item.homeImage}` }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.header}>Search Results for: "{query}"</Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // Thêm màu nền tối
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginTop:30
  },
  item: {
    marginBottom: 20,
    backgroundColor: "#333", // Màu nền tối hơn cho item
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow cho Android
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    marginTop: 10,
    fontWeight: "600", // Font nặng hơn để nổi bật
  },
  image: {
    width: "100%",
    height: 180, // Kích thước ảnh lớn hơn một chút
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#444", // Tạo viền nhẹ cho ảnh
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
});
