import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  Pressable
} from "react-native";
import Header from './const/Header'
import NavBar from './const/NavBar'
import { useNavigation } from '@react-navigation/native';
function MyComponent() {
    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('Pesan');
    }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header/>
   <View style={styles.view1}>
      <View style={styles.view2}>
        <ImageBackground
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/69563abb61d9e66635492ff9c88ca4f4eacf9360db57854737730bde4dc17ce7?apiKey=85914d26a88543e9b2a51785ada87893&",
          }}
          style={styles.image1}
        />
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text>D’paragon bukit dieng</Text>
          </View>
          <View style={styles.view5}>
            <View style={styles.view6}>
              <ImageBackground
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd808a48ed5245bcf3ff89615a3a025c9a19d38ddab33b753c2e7b2a75187aa?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.image2}
              />
              <ImageBackground
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd808a48ed5245bcf3ff89615a3a025c9a19d38ddab33b753c2e7b2a75187aa?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.image3}
              />
              <ImageBackground
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd808a48ed5245bcf3ff89615a3a025c9a19d38ddab33b753c2e7b2a75187aa?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.image4}
              />
              <ImageBackground
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd808a48ed5245bcf3ff89615a3a025c9a19d38ddab33b753c2e7b2a75187aa?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.image5}
              />
              <ImageBackground
                resizeMode="cover"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bd808a48ed5245bcf3ff89615a3a025c9a19d38ddab33b753c2e7b2a75187aa?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.image6}
              >
                <ImageBackground
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d66db12bf10b0bd8b52c1be630c6b3f972b047798d81899e033632d90aa526c6?apiKey=85914d26a88543e9b2a51785ada87893&",
                  }}
                  style={styles.image7}
                />
              </ImageBackground>
            </View>
            <View style={styles.view7}>
              <Text>4.9 (980)</Text>
            </View>
          </View>
          <View style={styles.view8}>
            <View style={styles.view9}>
              <ImageBackground
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc64b301a9707de32e8f7b60a061013123a9f4655be96481de7965c172e446d?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.image8}
              />
              <View style={styles.view10}>
                <Text>Bathtub</Text>
              </View>
            </View>
            <View style={styles.view11}>
              <Text>Wifi</Text>
            </View>
          </View>
          <View style={styles.view12}>
            <Text>Jl Bukit Dieng Blok H1, Kota Malang</Text>
          </View>
          <View style={styles.view13}>
            <Text>
              <Text style={{ fontWeight: "700" }}>IDR 175K </Text>
              <Text style={{ fontWeight: "400" }}>/ malam</Text>
            </Text>
          </View>
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>PESAN SEKARANG</Text>
                </Pressable>
      </View>
      <NavBar/>
    </View>
    
</ScrollView>

  );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
      },
  view1: {
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 17,
  },
  view2: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    backgroundColor: "#FFF",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 8,
  },
  image1: {
    width: 120,
    height: 129, // Adjusted height based on aspect ratio
    resizeMode: "cover",
    borderRadius: 8,
  },
  view3: {
    marginTop: 11,
    flexDirection: "column",
    alignItems: "stretch",
  },
  view4: {
    fontSize: 14,
    fontWeight: "700",
  },
  view5: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  view6: {
    flexDirection: "row",
    alignItems: "center",
  },
  image2: {
    width: 10,
    height: 11, // Adjusted height based on aspect ratio
  },
  image3: {
    width: 10,
    height: 11, // Adjusted height based on aspect ratio
  },
  image4: {
    width: 10,
    height: 11, // Adjusted height based on aspect ratio
  },
  image5: {
    width: 10,
    height: 11, // Adjusted height based on aspect ratio
  },
  image6: {
    width: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image7: {
    width: "100%",
    aspectRatio: 0.56,
  },
  view7: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    fontSize: 10,
    color: "#515252",
    fontWeight: "400",
  },
  view8: {
    marginTop: 9,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 10,
    color: "#515252",
    fontWeight: "400",
  },
  view9: {
    borderRadius: 8,
    backgroundColor: "#F8F9FB",
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    paddingRight: 6,
  },
  image8: {
    width: 10,
    aspectRatio: 1,
  },
  view10: {
    marginLeft: 6,
  },
  view11: {
    borderRadius: 8,
    backgroundColor: "#F8F9FB",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 23,
    marginLeft: 8,
  },
  view12: {
    marginTop: 10,
    fontSize: 10,
    color: "#515252",
  },
  view13: {
    alignSelf: "flex-end",
    marginTop: 29,
    fontSize: 14,
    color: "#4B84F1",
    fontWeight: "500",
  },
});

export default MyComponent;
