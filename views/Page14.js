import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Page14() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Trips</Text>
                <Text style={styles.description1}>Say hello to the world again</Text>
                <Text style={styles.description2}>Plan a new trip and explore places to stay</Text>
                <Text style={styles.description3}>close to all the places you love.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Start exploring</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Page06")}>
                    <FontAwesome5 name="search" size={24} color="white" />
                    <Text style={styles.tabText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Page13")} >
                    <FontAwesome5 name="heart" size={24} color="white" />
                    <Text style={styles.tabText}>Wishlists</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Page14")}>
                    <FontAwesome5 name="plane-departure" size={24} color="white" />
                    <Text style={styles.tabText}>Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Page15")}>
                    <FontAwesome5 name="comment" size={24} color="white" />
                    <Text style={styles.tabText}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Page17")}>
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
        backgroundColor: '#222', // Màu nền tối
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        marginTop: 50,
        marginLeft: 10,
    },
    description1: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 30,
    },
    description2: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'left',
        marginLeft: 30,
    },
    description3: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
        textAlign: 'left',
        marginLeft: 30,
    },
    button: {
        backgroundColor: '#222',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 40,
        width: 180,
        height: 53,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#222', // Màu nền
        paddingVertical: 10,
    },
    tab: {
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        fontSize: 12,
    },
});
