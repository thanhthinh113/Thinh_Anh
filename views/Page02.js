import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons"; // Import icons

export default function Page01() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.textLSU, styles.color]}>Log in or sign Up</Text>
        <View style={styles.content}>
          <Text style={[styles.textCP, styles.color]}>Country/Region</Text>
          <TextInput
            style={styles.input}
            placeholder="United States(+)"
            placeholderTextColor="white"
          ></TextInput>
          <Text style={[styles.textCP, styles.color]}>Phone Number</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <Text style={[styles.textTitle, styles.color]}>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.
        </Text>
        <TouchableOpacity style={[styles.button, styles.margin]} onPress={()=>navigation.navigate("Page04")}>
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
        <TouchableOpacity style={styles.login} onPress={()=>navigation.navigate("Page03")}>
          <Text style={[styles.textLog, styles.color, styles.text]}>
            LOG IN
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
