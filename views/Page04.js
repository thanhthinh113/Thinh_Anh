import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Page04() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[styles.textLSU, styles.color]}>Finish signing up</Text>
        <View></View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={[styles.textCP, styles.color]}>First name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.content}>
            <Text style={[styles.textCP, styles.color]}>Last name</Text>
            <TextInput style={styles.input} />
            <Text style={[styles.textTitle, styles.color]}>
              Make sure it matches the name on your government ID.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.textCP, styles.color]}>Birthday</Text>
            <TextInput style={styles.input} />
            <Text style={[styles.textTitle, styles.color]}>
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Airbnb.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.textCP, styles.color]}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email@gmail.com"
              placeholderTextColor="white"
            />
            <Text style={[styles.textTitle, styles.color]}>
              We'll email you trip confirmations and receipts.
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.textCP, styles.color]}>Password</Text>
            <TextInput style={styles.input} />
            <Text style={[styles.textTitle, styles.color]}>
              Password strength: strong{"\n"}
              Can't contain your name or email address{"\n"}
              At least 8 characters{"\n"}
              Contains a number or symbol
            </Text>
            <Text style={[styles.textTitle, styles.color]}>
              By selecting Agree and continue below, I agree to Airbnb’s Terms
              of Service, Payments Terms of Service, Privacy Policy, and
              Nondiscrimination Policy.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Button Fixed at the Bottom */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Page05")}
        >
          <Text style={styles.text}>Agree and continue</Text>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  color: {
    color: "white",
  },
  textLSU: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10, // Khoảng cách giữa icon và tiêu đề
  },
  scrollContainer: {
    paddingHorizontal: 30,
  },
  container: {
    paddingTop: 20,
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
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#414141",
    width: "100%",
    borderRadius: 6,
    padding: 20,
    marginBottom: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: "black",
  },
  button: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#57B65F",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
