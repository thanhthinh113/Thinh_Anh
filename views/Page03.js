import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";

export default function Page03() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        Alert.alert('Đăng nhập thành công!');
        navigation.navigate('Page06'); // Điều hướng đến màn hình Page
      } 
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert("Đăng nhập thất bại", "Email hoặc mật khẩu không chính xác");
      } else {
        Alert.alert("Lỗi", "Đã xảy ra lỗi trong quá trình đăng nhập");
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.textLSU, styles.color]}>Log in or sign Up</Text>
        <View style={styles.content}>
          <Text style={[styles.textCP, styles.color]}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Nhập email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={[styles.textCP, styles.color]}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>
        <Text style={[styles.textTitle, styles.color]}>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.
        </Text>
        <TouchableOpacity
          style={[styles.button, styles.margin]}
          onPress={handleLogin}
        >
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
        <Text style={[styles.textor, styles.color, styles.text]}>or</Text>

        <TouchableOpacity
          style={[styles.button, styles.iconButton, styles.outlinedButton]}
        >
          <FontAwesome
            name="envelope"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={[styles.text, styles.color]}>CONTINUE WITH EMAIL</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.iconButton, styles.outlinedButton]}
        >
          <AntDesign
            name="apple1"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={[styles.text, styles.color]}>CONTINUE WITH APPLE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.iconButton, styles.outlinedButton]}
        >
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={[styles.text, styles.color]}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.iconButton, styles.outlinedButton]}
        >
          <FontAwesome
            name="facebook"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text style={[styles.text, styles.color]}>
            CONTINUE WITH FACEBOOK
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Page02")}
        >
          <Text style={[styles.textLog, styles.color, styles.text]}>
            SIGN UP
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
  textTitle: {
    marginTop: 5,
  },
  content: {
    width: "100%",
  },
  input: {
    backgroundColor: "#414141",
    width: "100%",
    borderRadius: 6,
    padding: 20,
    marginBottom: 10,
    color:"white"
  },
  button: {
    padding: 15,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  outlinedButton: {
    borderColor: "white", // Viền màu đen
    borderWidth: 0.5, // Độ rộng của viền
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textor: {
    textAlign: "center",
    marginBottom: 20,
  },
  iconButton: {
    marginBottom: 10,
  },
  margin: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#57B65F", // Màu xanh cho nút "Continue" chính
    color: "white",
  },
  textLog: {
    textAlign: "center",
  },
  login: {
    marginTop: 20,
  },
});
