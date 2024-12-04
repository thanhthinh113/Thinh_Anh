import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

export default function UserProfilePage({ route, navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Nam');
  const [birthDate, setBirthDate] = useState(new Date());
  const [address, setAddress] = useState('');  // New state for address
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [user, setUser] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // To show loading while fetching data
  const email = route.params?.email || 'Unknown';

  useEffect(() => {
    // Fetch user data when the component is mounted
    axios.get(`http://localhost:3000/user/${email}/detail`)
      .then(response => {
        const userData = response.data.user;
        setUser(userData);
        setName(userData.name);
        setPhone(userData.phone);
        setGender(userData.gender || 'Nam');
        setBirthDate(new Date(userData.birthDate || Date.now()));
        setAddress(userData.address || '');  // Set address from user data
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        Alert.alert('Error', 'Failed to load user data.');
        setLoading(false);
      });
  }, [email]);

  const handleSave = () => {
    const userData = {
      name: name,
      phone: phone,
      gender: gender,
      birthDate: birthDate.toISOString(), // Convert to ISO format
      address: address, // Include address
    };
  
    axios.put(`http://localhost:3000/user/${email}`, userData)
      .then(response => {
        Alert.alert('Success', 'User information has been saved.');
        console.log(response.data); // Log the updated user data
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to save user information.');
        console.error(error); // Log error
      });
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#777"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
       {/* New Address Field */}
       <View style={styles.field}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor="#777"
          value={address}
          onChangeText={setAddress} // Update the address state
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Nam" value="Nam" />
          <Picker.Item label="Nu" value="Nu" />
        </Picker>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Birth Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
          <Text style={styles.value}>{birthDate.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="calendar"
            onChange={onChangeDate}
          />
        )}
      </View>

     

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#191919', // Dark background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  field: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  label: {
    fontSize: 14,
    color: '#AAA',
  },
  value: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  input: {
    fontSize: 16,
    color: 'white',
    padding: 0,
    marginTop: 5,
  },
  picker: {
    color: 'white',
  },
  dateInput: {
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#57B65F',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
