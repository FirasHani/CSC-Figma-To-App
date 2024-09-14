import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Home');
  }

  const handleSubmitStored = () => {
    navigation.navigate('Tersimpan');
  }

  const handleSubmitOrder = () => {
    navigation.navigate('Order');
  }
  const handleSubmitTersimpan = () => {
    navigation.navigate('Pesan');
}
const handleSubmitPeason = () => {
  navigation.navigate('Pesan');
}
const handleSubmitProfile = () => {
  navigation.navigate('Profile');
}



  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.navItem}>
          <Pressable onPress={handleSubmit}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaca1a826be5f01e5c0879296d7d9a2517517ec7686239a1950bf8a880e133b8?",
              }}
              style={styles.navIcon}
            />
          </Pressable>
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Pressable onPress={handleSubmitOrder}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/03455d28f90419e645b52f3d63008c386ca0438f42549490073662874b2e3d13?",
              }}
              style={styles.navIcon}
            />
          </Pressable>
          <Text style={styles.navText}>Order</Text>
        </View>
        <View style={styles.navItem}>
          <Pressable onPress={handleSubmitStored}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/59337076aefa7afafe16c09be4cdbe08e8bda2bb8ea3bb8a34feee978c264578?",
              }}
              style={styles.navIcon}
            />
          </Pressable>
          <Text style={styles.navText}>Stored</Text>
        
        </View>
        <View style={styles.navItem}>
          <Pressable
          onPress={handleSubmitTersimpan}
          >
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c154f7e43753380e55d01708cc09525bd29f3368d9c09adbe2af4b3f12a71907?",
            }}
            style={styles.navIcon}
          />
          </Pressable>
          <Text style={styles.navText}>Pesan</Text>
        </View>
        <View style={styles.navItem}>
          <Pressable
          onPress={handleSubmitProfile}
          >
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec17d28225ced93386e0fb9c9af1408abdcf3cd7b77581a1f6c2fb95e06eae8c?",
            }}
            style={styles.navIcon}
          />
          </Pressable>
     
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop:20
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navIcon: {
    width: 28,
    height: 28,
  },
  navText: {
    marginTop: 7,
    fontSize: 10,
    color: "#515252",
    textAlign: "center",
  },
  navDescription: {
    fontSize: 8,
    color: "#8F9090",
  },
});

export default MyComponent;
