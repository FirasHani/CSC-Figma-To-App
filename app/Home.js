import * as React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Button
} from "react-native";
import Header from './const/Header'
import ImageDesgin from './const/ImageDesgin'
import NavBar from './const/NavBar'
import HomeHeader from './HomeHeader'
import ImageDesgin2 from './const/ImageDesgin2'
import { useNavigation } from '@react-navigation/native';

function MyComponent() {
    const navigation = useNavigation();

    const handleSubmit=()=>{
        navigation.navigate('Admin');
    }

    const handleSubmitSearch=()=>{
      navigation.navigate('Search');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header/>
        <HomeHeader/>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.view4}>
              <Text>Pesan Kamar Kost</Text>
            </View>
            <View style={styles.view5}>
              <Pressable
              onPress={handleSubmitSearch}
              >
              <Image
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5205decaf4443c3a7c19201026c04999af1c9d8805c619ace2a5e3b3c4061b69?",
                }}
                style={styles.image1}
              />
              </Pressable>
                  <Button
                  onPress={handleSubmit}
                  >
                      GO TO ADMIN
                  </Button>
              <View style={styles.view6}>
                <Text>
                Where do you want to stay?</Text>
              </View>
            </View>
            <View style={styles.view7}>
              <View style={styles.view8}>
                <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/59a18c92a40d1c4323e47d4137e4e791093ba0f147fff7cdcc60c9bee5d10705?",
                  }}
                  style={styles.image2}
                />

                <View style={styles.view9}>

                  <Text>Sen,28 Sep 2020</Text>
                </View>
              </View>
              <View style={styles.view10}>
                <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc289338bf64b01d0b22c90355c152ce3b965cd901374072102363e43d0bf7e4?",
                  }}
                  style={styles.image3}
                />
                <View style={styles.view11}>
                  <Text>1 Malam</Text>
                </View>
              </View>
            </View>
            <View style={styles.view12}>
              <Text>Check in mulai dari jam 14:00</Text>
            </View>
            <View style={styles.view13}>
              <Text>
                Check out{" "}
                <Text style={{ fontWeight: "500", color: "rgba(49,51,51,1)" }}>
                  Sel,
                </Text>{" "}
                <Text style={{ fontWeight: "500", color: "rgba(49,51,51,1)" }}>
                  29 Sep 2020
                </Text>{" "}
                sebelum jam 12:00
              </Text>
            </View>
            <Pressable style={styles.view14}>
              <Text style={{ color: "#FFF", fontWeight: "700", letterSpacing: 0.24 }}>CHECK AVAILABILITY</Text>
            </Pressable>
          </View>
          <View style={styles.view15}>
            <Text>
            Available cities</Text>
          </View>
          <View style={styles.rowContainer}>
        <ImageDesgin />
        <ImageDesgin />
        
      </View>
      <View style={styles.view15}>
            <Text>Payment options
            </Text>
          </View>
      <View style={styles.rowContainer}>
        <ImageDesgin2 />
        <ImageDesgin2 />
        
      </View>
        </View>
        {/* <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f811e51b628b36664f77d98b21e821fa3e3ab6510f83f3c0d0ce4c5506e0dde9?",
          }}
          style={styles.image8}
        /> */}
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
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
  },
  rowContainer: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center items vertically
    justifyContent: "space-around", // Distribute items evenly along the row
    width: "100%", // Take full width of the parent container
    paddingVertical: 10, // Adjust spacing as needed
  },
  view2: {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 17px",
  },
  view3: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 2,
    backgroundColor: "#FFF",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 12,
    color: "#313333",
    fontWeight: "400",
    padding: 16,
  },
  view4: {
    fontWeight: "700",
    fontSize: 18,
    fontFamily: "Roboto, sans-serif",
  },
  view5: {
    borderRadius: 8,
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1,
    marginTop: 20,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    color: "#8F9090",
    letterSpacing: 0.06,
  },
  image1: {
    width: 14,
    aspectRatio: 1,
  },
  view6: {
    flex: 1,
    fontFamily: "Roboto, sans-serif",
    marginLeft: "auto",
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
    fontWeight: "500",
    letterSpacing: 0.06,
  },
  view8: {
    borderRadius: 8,
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image2: {
    width: 14,
    aspectRatio: 1,
  },
  view9: {
    flex: 1,
    fontFamily: "Roboto, sans-serif",
    marginLeft: "auto",
  },
  view10: {
    borderRadius: 8,
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image3: {
    width: 14,
    aspectRatio: 1,
  },
  view11: {
    fontFamily: "Roboto, sans-serif",
  },
  view12: {
    color: "#515252",
    letterSpacing: 0.06,
    marginTop: 18,
    fontFamily: "Roboto, sans-serif",
  },
  view13: {
    letterSpacing: 0.06,
    marginTop: 6,
    fontFamily: "Roboto, sans-serif",
  },
  view14: {
    backgroundColor: "#1A73E8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginTop: 16,
  },
  view15: {
    marginTop: 40,
    marginBottom: 16,
    fontFamily: "Roboto, sans-serif",
    paddingLeft:20
  },
  view16: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 16,
    fontFamily: "Roboto, sans-serif",
  },
  view17: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 16,
  },
  view18: {
    borderRadius: 8,
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image4: {
    width: 14,
    aspectRatio: 1,
  },
  view19: {
    flex: 1,
    fontFamily: "Roboto, sans-serif",
    marginLeft: "auto",
  },
  view20: {
    fontFamily: "Roboto, sans-serif",
  },
  view21: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  view22: {
    fontFamily: "Roboto, sans-serif",
  },
  image5: {
    width: 14,
    aspectRatio: 1,
  },
  view23: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    fontFamily: "Roboto, sans-serif",
  },
  image6: {
    width: 14,
    aspectRatio: 1,
  },
  view24: {
    fontFamily: "Roboto, sans-serif",
  },
  view25: {
    marginTop: 40,
    fontFamily: "Roboto, sans-serif",
  },
  view26: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image7: {
    width: 14,
    aspectRatio: 1,
  },
  view27: {
    fontFamily: "Roboto, sans-serif",
  },
  view28: {
    fontFamily: "Roboto, sans-serif",
  },
  image8: {
    marginTop: 64,
    marginBottom: 64,
    alignSelf: "center",
    width: 292,
    aspectRatio: 1,
  },
});

export default MyComponent;
