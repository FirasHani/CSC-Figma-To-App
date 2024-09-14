import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from './const/Header';
import axios from 'axios'; // Import Axios

const { width, height } = Dimensions.get('window');

function AdminDashboard() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [desc, setDesc] = useState('');

  const handleAddHotel = async () => {
    const hotelData = {
      name: name,
      location: location,
      rating: rating,
      desc: desc
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/hotels/store', hotelData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Hotel added:', response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error adding hotel:', error);
      if (error.response) {
        // Server responded with an error status code (e.g., 4xx, 5xx)
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request Error:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <View style={styles.view1}>
        <View style={styles.view9}>
          <View style={styles.view10}>
            <Text style={styles.text10}>Admin Dashboard</Text>
          </View>
          <View style={styles.view11}>
            <Text>Add New Hotel</Text>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hotel Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              name={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={location}
              name={location}
              onChangeText={setLocation}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Rating</Text>
            <TextInput
              style={styles.input}
              value={rating}
              name={rating}
              onChangeText={setRating}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              value={desc}
              name={desc}
              onChangeText={setDesc}
              multiline
            />
          </View>
          <View style={styles.view17}>
            <Pressable onPress={handleAddHotel}>
              <Text style={styles.buttonText}>Add Hotel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "stretch",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  view9: {
    marginTop: 28,
    width: "100%",
    paddingHorizontal: 20,
  },
  view10: {
    marginBottom: 20,
  },
  text10: {
    color: "#313333",
    fontFeatureSettings: "'clig' off, 'liga' off",
    letterSpacing: 0.4,
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Roboto, sans-serif",
  },
  view11: {
    color: "#515252",
    fontFamily: "Roboto, sans-serif",
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: "#8F9090",
    fontFamily: "Roboto, sans-serif",
    marginBottom: 5,
  },
  input: {
    borderRadius: 8,
    borderColor: "rgba(75, 132, 241, 1)",
    borderWidth: 2,
    padding: 10,
    fontFamily: "Roboto, sans-serif",
  },
  view17: {
    borderRadius: 16,
    backgroundColor: "#4B84F1",
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});

export default AdminDashboard;
