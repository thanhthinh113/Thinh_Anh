import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  fontFamily,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Page06() {
  const navigation = useNavigation();
  const nearbyPlaces = [
    {
      Image: require("../images/image29.png"),
      title: "Los Angeles",
      time: "15 minute drive",
    },
    {
      Image: require("../images/image30.png"),
      title: "Las Vegas",
      time: "5 hours",
    },
    {
      Image: require("../images/image31.png"),
      title: "San Diego",
      time: "2.5 hour drive",
    },
    {
      Image: require("../images/image32.png"),
      title: "Henderson",
      time: "5.5 hours",
    },
    {
      Image: require("../images/image29.png"),
      title: "Los Angeles",
      time: "15 minute drive",
    },
    {
      Image: require("../images/image30.png"),
      title: "Las Vegas",
      time: "5 hours",
    },
    {
      Image: require("../images/image31.png"),
      title: "San Diego",
      time: "2.5 hour drive",
    },
    {
      Image: require("../images/image32.png"),
      title: "Henderson",
      time: "5.5 hours",
    },
  ];
  const places = [
    {
      image: require("../images/image33.png"),
      title1: "Los Angeles",
    },
    {
      image: require("../images/image34.png"),
      title1: "Las Vegas",
    },
    {
      image: require("../images/image43.png"),
      title1: "San Diego",
    },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.Image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title4}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
  const renderItem1 = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image5} />
      <Text style={styles.title5}>{item.title1}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header1}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.searchIconWrapper}>
              <Ionicons name="search" size={20} color="#FFFFFF80" />
            </TouchableOpacity>
            <TextInput
              placeholder="Where are you going?"
              placeholderTextColor={"#FFFFFF80"}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.title1}>Not sure where to go?{"\n"}Perfect.</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>I'm flexible</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content1}>
          <Text style={styles.subtitle}>Explore nearby</Text>
          <FlatList
            data={nearbyPlaces}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.subtitle}>Live anywhere</Text>
          <FlatList
            data={places}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate("Page06")}
        >
          <FontAwesome5 name="search" size={24} color="white" />
          <Text style={styles.tabText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate("Page13")}
        >
          <FontAwesome5 name="heart" size={24} color="white" />
          <Text style={styles.tabText}>Wishlists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate("Page14")}
        >
          <FontAwesome5 name="plane-departure" size={24} color="white" />
          <Text style={styles.tabText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate("Page15")}
        >
          <FontAwesome5 name="comment" size={24} color="white" />
          <Text style={styles.tabText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate("Page17")}
        >
          <FontAwesome5 name="user" size={24} color="white" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#222",
    width: "400px",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    width: 130,
    borderWidth: 0.3,
    borderColor: "#FFFFFF",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
    alignItems: "center",
  },
  content1: {
    marginTop: 100,
    width: "100%",
    backgroundColor: "black",
  },
  subtitle: {
    color: "#FFFFFF",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "black",
    borderRadius: 10,
    width: "80%",
  },
  header1: {
    flexDirection: "row",
    marginTop: 70,
    justifyContent: "center",
  },
  input: {
    color: "#FFFFFF80",
    padding: 10,
    paddingLeft: 50,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    alignItems: "center",
  },
  title1: {
    fontSize: 20,
    fontWeight:"bold",
    color: "#FFFFFF",
    textAlign:"center"
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3090C9", // Màu nền xanh cho ô
    borderRadius: 4,
    margin: 5,
    width: 250,
    marginTop: 20,
    height: 70,
  },
  title4:{
    fontWeight:"bold",
    color:"white"
  },
  image: {
    width: 80,
    height: 70,
    borderRadius:4
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  time: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
  },
  title5: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFFFFF",
  },
  item: {
    width: 250,
    height: 250,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },
  image5: {
    flex: 1,
    borderRadius: 4,
    width: 250,
    height: 250,
    marginTop: 10,
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#222", // Màu nền
    paddingVertical: 10,
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontSize: 12,
  },
});
