import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Page15() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("messages");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    if (tab === "messages") {
      navigation.navigate("Page15");
    } else if (tab === "notifications") {
      navigation.navigate("Page16");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Inbox</Text>
        <View style={styles.tabContainer1}>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => handleTabPress("messages")}>
              <Text
                style={[
                  styles.tabText1,
                  selectedTab === "messages" && styles.selectedTab,
                ]}
              >
                Messages
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabPress("notifications")}>
              <Text
                style={[
                  styles.tabText1,
                  selectedTab === "notifications" && styles.selectedTab,
                ]}
              >
                Notifications
              </Text>
            </TouchableOpacity>
          </View>

          {/* Nội dung */}
          <View style={styles.content}>
            <Text style={styles.message1}>You have no unread messages</Text>
            <Text style={styles.message}>
              When you contact a host or send a{"\n"}reservation request, you’ll
              see your{"\n"}messages here.
            </Text>
          </View>
        </View>
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
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    borderColor: "#444",
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 30,
    backgroundColor: "#000",
    borderBottomWidth: 1,
  },
  tabContainer1: {
    backgroundColor: "#000",
    height: "100%",
  },
  tab: {
    padding: 10,
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    margin: 8,
  },
  tabText1: {
    color: "#fff",
    fontSize: 16,
    margin: 8,
  },
  content: {
    alignItems: "flex-start",
    backgroundColor: "#000",
    marginLeft: 30,
  },
  message: {
    color: "#FFFFFF",
    marginBottom: 5,
  },
  message1: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#333",
    padding: 10,
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#222",
    paddingVertical: 10,
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontSize: 12,
  },
  selectedTab: {
    color: "#57B65F",
    fontWeight: "bold",
  },
});
