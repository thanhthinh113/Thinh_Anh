import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// CardItem Component
function CardItem({ imageBig, image1, image2, name, title }) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.allImage}>
        <Image source={imageBig} style={styles.imageBig} />
        <View style={styles.imageRow}>
          <Image source={image1} style={[styles.imageSmall,styles.imageSmallRd]} />
          <Image source={image2} style={styles.imageSmall} />
        </View>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardName}>{name}</Text>
    </TouchableOpacity>
  );
}

// Main Page13 Component
export default function Page13() {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      imageBig: require("../images/image18.png"),
      image1: require("../images/image19.png"),
      image2: require("../images/image21.png"),
      title:"Anytime",
      name: "Island in the sun",
    },
    {
      id: 2,
      imageBig: require("../images/image22.png"),
      image1: require("../images/image23.png"),
      image2: require("../images/image24.png"),
      title:"Anytime",
      name: "London in the sun",
    },
    {
        id: 3,
        imageBig: require("../images/image18.png"),
        image1: require("../images/image19.png"),
        image2: require("../images/image21.png"),
        title:"Anytime",
        name: "VietNam in the sun",
      },
      {
        id: 4,
        imageBig: require("../images/image22.png"),
        image1: require("../images/image23.png"),
        image2: require("../images/image24.png"),
        title:"Anytime",
        name: "ThaiLand in the sun",
      },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Wishlists</Text>
        <Text style={styles.titleContent}>
          Collect places to stay and things to do by{"\n"}tapping the heart
          icon.
        </Text>

        <ScrollView style={styles.content}>
          {data.map((item) => (
            <CardItem
              key={item.id}
              imageBig={item.imageBig}
              image1={item.image1}
              image2={item.image2}
              name={item.name}
              title={item.title}
            />
          ))}
        </ScrollView>
      </View>

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
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 20,
  },
  titleContent: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  },
  allImage: {
    flexDirection: "row",
  },
  content: {
    backgroundColor: "#000",
    padding: 20,
  },
  
  // CardItem Styles
  cardContainer: {
    marginBottom: 20,
    backgroundColor: "#333",
    borderRadius: 4,
    height:300
  },
  imageBig: {
    width: "65%",
    height: 200,
    borderTopLeftRadius:4
  },
  cardTitle:{
    color:"grey",
    marginLeft:20,
    marginTop:20
  },
  cardName: {
    fontSize: 20,
    color: "#fff",
    marginLeft:20,

  },
  imageRow: {
    width: "33%",
    marginLeft: 6,
    height:180
  },
  imageSmall: {
    width: "100%",
    height: 98,
    marginBottom: 4,
  },
  imageSmallRd:{
    borderTopRightRadius:4
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
