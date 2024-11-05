import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  
  export default function Page05() {
    const navigation = useNavigation();
  
    // Hàm điều hướng hoặc mở link
    const handleLearnMore = () => {
      // Thêm điều hướng hoặc mở link
      console.log("Learn more clicked");
    };
  
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
        
        <View style={styles.content}>
          <Text style={styles.text}>
            Airbnb is a community where anyone can belong
          </Text>
          <Text style={styles.textContent}>
            To ensure this, we’re asking you to commit to respecting everyone on
            Airbnb. I agree to treat everyone in the Airbnb community – regardless
            of their race, religion, national origin, ethnicity, skin colour,
            disability, sex, gender identity, sexual orientation or age – with
            respect, and without judgement or bias.{" "}
            <TouchableOpacity onPress={handleLearnMore}>
              <Text style={styles.link}>Learn more</Text>
            </TouchableOpacity>
          </Text>
        </View>
        
        {/* Footer với hai nút ở đáy */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Page06")}
          >
            <Text style={styles.textButton}>Agree and join</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
          >
            <Text style={styles.textButton}>Decline</Text>
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
      marginLeft: 10,
    },
    text: {
      marginTop: 20,
      color: "white",
      fontSize: 28,
      fontWeight: "bold",
    },
    content: {
      paddingHorizontal: 30,
      paddingBottom: 100, // Khoảng trống để tránh footer
    },
    textContent: {
      color: "white",
      marginTop: 20,
      lineHeight: 22,
      fontSize: 15,
    },
    link: {
      color: "white", // Màu của link
      textDecorationLine: "underline", // Gạch chân
      fontWeight: "bold",
    },
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: "black",
    },
    button: {
      padding: 15,
      borderRadius: 50,
      backgroundColor: "#57B65F",
      alignItems: "center",
    },
    button1: {
      padding: 15,
      borderRadius: 50,
      alignItems: "center",
      borderColor: "white",
      borderWidth: 0.3,
      marginTop: 15,
    },
    textButton: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  