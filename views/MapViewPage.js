import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const hotels = [
    {
      id: 1,
      name: 'Hotel A',
      latitude: 34.0522,
      longitude: -118.2437, // Los Angeles
    },
    {
      id: 2,
      name: 'Hotel B',
      latitude: 36.1699,
      longitude: -115.1398, // Las Vegas
    },
    {
      id: 3,
      name: 'Hotel C',
      latitude: 32.7157,
      longitude: -117.1611, // San Diego
    },
  ];
  
export default function MapViewPage() {
  const [hotels, setHotels] = useState([]);
  const navigation=useNavigation();
  useEffect(() => {
    // Giả sử bạn lấy dữ liệu khách sạn từ API hoặc nguồn tĩnh
    setHotels([
      { id: 1, name: 'Hotel A', latitude: 34.0522, longitude: -118.2437 },
      { id: 2, name: 'Hotel B', latitude: 36.1699, longitude: -115.1398 },
      { id: 3, name: 'Hotel C', latitude: 32.7157, longitude: -117.1611 },
    ]);
  }, []);
  
  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 34.0522, // Vị trí khởi đầu của bản đồ
          longitude: -118.2437,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {hotels.map((hotel) => (
          <Marker
            key={hotel.id}
            coordinate={{ latitude: hotel.latitude, longitude: hotel.longitude }}
            title={hotel.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 3,
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
