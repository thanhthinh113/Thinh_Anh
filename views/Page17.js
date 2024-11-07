import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Animated, PanResponder, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';


export default function Page17() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container1} >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.profileContainer}>
                        <Image
                            source={require('../images/image 27.png')}
                            style={styles.profileImage}
                        />
                        <View style={styles.header1}>
                            <Text style={styles.profileName}>Arshia</Text>
                            <Text style={styles.profileSubtitle}>Show profile</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.arrowContainer}>
                        <Image
                            source={require('../images/Vector 2.png')}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.sectionContainer1}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>ACCOUNT SETTINGS</Text>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Personal information</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Payments and payouts</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Notifications</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Travel for work</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionContainer2}>
                        <Text style={styles.sectionTitle}>HOSTING</Text>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>List your space </Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Manage your listings</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Host an experience</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionContainer2}>
                        <Text style={styles.sectionTitle}>REFERRALS & CREDITS</Text>
                        <TouchableOpacity style={styles.optionContainer}>
                            <View>
                                <Text style={styles.optionText}>Gift card </Text>
                                <Text style={styles.optionText1}>Send or redeem a gift card </Text>
                            </View>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionContainer2}>
                        <Text style={styles.sectionTitle}>SUPPORT</Text>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>List your space </Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Manage your listings</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer}>
                            <Text style={styles.optionText}>Host an experience</Text>
                            <Image
                                source={require('../images/Vector 2.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
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
        backgroundColor: '#191919',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 50,
        marginLeft: 20,
    },
    header1: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginRight: 10,
    },
    profileName: {
        fontSize: 32,
        color: '#FFFFFF'
    },
    profileSubtitle: {
        fontSize: 14,
        color: '#888',
    },
    arrowContainer: {
        justifyContent: 'center',
    },
    arrowIcon: {
        width: 7,
        height: 14,
        marginRight: 20,
    },
    sectionContainer: {
        marginBottom: 20,
        marginTop: 50,
        marginLeft: 20,
    },
    sectionContainer2: {
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    sectionContainer1: {
        backgroundColor: '#000',
    },
    sectionTitle: {
        fontSize: 14,
        marginBottom: 10,
        color: '#FFFFFF99',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    optionText1: {
        fontSize: 12,
        color: '#FFFFFF99'
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
