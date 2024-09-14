import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import axios from "axios";

function MyComponent() {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/hotels/search`, {
        params: {
          name: name
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("search" + name);
      console.log("data");
      console.log(response.data.search);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter hotel name"
        value={name}
        onChangeText={setName}
      />
      <Pressable onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
      <ScrollView>
        {results?.search?.map((hotel) => (
          <View key={hotel.id} style={styles.hotelContainer}>
            <Text style={styles.hotelName}>{hotel.name}</Text>
            <Text style={styles.hotelDetails}>{hotel.location}</Text>
            <Text style={styles.hotelDetails}>{hotel.rating}</Text>
            <Text style={styles.hotelDescription}>{hotel.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  hotelContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hotelDetails: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  hotelDescription: {
    fontSize: 14,
    color: "#333",
  },
});

export default MyComponent;
