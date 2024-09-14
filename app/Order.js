import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from './const/Header';
import NavBar from './const/NavBar';

function MyComponent() {
    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('Tersimpan');
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <Header />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Order</Text>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e82afbfcc44f4c0603345dcbcc51961a140d3dec2e0a87137454b44b6eaf8f7c?",
                        }}
                        style={styles.image}
                    />
                    <Text style={styles.description}>Oops! Looks like you haven't booked a room yet</Text>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>ORDER NOW</Text>
                    </Pressable>
                </View>
            </View>
            <NavBar />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "space-between",
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 360,
        width: "100%",
    },
    heading: {
        color: "#313333",
        fontSize: 18,
        fontFamily: "Roboto",
        marginTop: 20,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 200,
        marginTop: 20,
    },
    description: {
        color: "#515252",
        textAlign: "center",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "#4B84F1",
        borderRadius: 16,
        paddingVertical: 18,
        paddingHorizontal: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 12,
        fontFamily: "Roboto",
        letterSpacing: 0.24,
    },
});

export default MyComponent;
