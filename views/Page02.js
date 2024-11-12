import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Mật khẩu không khớp", "Vui lòng kiểm tra lại mật khẩu.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert("Đăng ký thành công", "Bạn có thể đăng nhập ngay bây giờ.");
        navigation.goBack(); // Quay về màn hình trước đó
      }
    } catch (error) {
      Alert.alert("Đăng ký thất bại", "Email đã tồn tại hoặc có lỗi xảy ra.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.textLSU, styles.color]}>Sign Up</Text>
        <Text style={[styles.textCP, styles.color]}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Nhập email"
          placeholderTextColor="#999"
          autoCapitalize="none"  // Prevents auto-capitalization
          autoCorrect={false}
        />
        <Text style={[styles.textCP, styles.color]}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Nhập mật khẩu"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCapitalize="none"  // Prevents auto-capitalization
          autoCorrect={false}
        />
        <Text style={[styles.textCP, styles.color]}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#999"
          secureTextEntry={true}
          autoCapitalize="none"  // Prevents auto-capitalization
          autoCorrect={false}
        />
        <TouchableOpacity style={[styles.button, styles.margin]} onPress={handleSignup}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>

        {/* Nút quay về đăng nhập */}
        <TouchableOpacity
          style={styles.backToLogin}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.textLog, styles.color]}>
            Quay về Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  color: {
    color: "white",
  },
  container: {
    flex: 1,
    margin: 30,
  },
  textLSU: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  textCP: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#414141",
    width: "100%",
    borderRadius: 6,
    padding: 20,
    marginBottom: 10,
    color: "white",
  },
  button: {
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#57B65F",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  margin: {
    marginTop: 20,
  },
  backToLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  textLog: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});
