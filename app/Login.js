import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Pressable
} from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import Header from './const/Header'

const { width, height } = Dimensions.get('window');

function MyComponent() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Home');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
       <Header />
      <View style={styles.view1}>
        <View style={styles.view9}>
          <View style={styles.view10}>
            <Text style={styles.text10}>Welcome to D'paragon</Text>
          </View>
          <View style={styles.view11}>
            <Text>Sign in to get started</Text>
          </View>
          <View style={styles.view12}>
            <Text>Email</Text>
          </View>
          <View style={styles.view13}>
            <Text>
              <Text style={{ color: 'rgba(75,132,241,1)' }}></Text>firas@gmail.com
            </Text>
          </View>
          <View style={styles.view14}>
            <Text>Password</Text>
          </View>
          <View style={styles.view15}>
            <View style={styles.view16}>
              <Text>6+ characters</Text>
            </View>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ff6716b4665c1f03af61bad276275682b44ab0df4aeab632d55b3343cf48e8b?",
              }}
              style={styles.image4}
            />
          </View>
          <View style={styles.view17}>
          <Pressable
          title="Login"
           onPress={handleSubmit}
          >
            Sgin in 
          </Pressable>
          </View>
          <View style={styles.view18}>
            <Text>or</Text>
          </View>
        </View>
        <View style={styles.view19}>
          <View style={styles.view20}>
            <Text>LOG IN WITH TELEPHONE</Text>
          </View>
          <View style={styles.view21}>
            <Text>
              Don't have an account yet?{" "}
              <Text style={{ fontWeight: '500', color: 'rgba(75,132,241,1)' }}>
                List
              </Text>
            </Text>
          </View>
          <View style={styles.view22}>
            <Text>Forgot the password ?</Text>
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
  view2: {
    backgroundColor: "#4B84F1",
    width: "100%",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  image1: {
    width: 15,
    height: 15,
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
  view5: {
    fontFamily: "SF Pro Text, sans-serif",
  },
  image2: {
    width: 13,
    height: 13,
  },
  view6: {
    textAlign: "center",
    fontFamily: "SF Pro Text, sans-serif",
    fontWeight: "600",
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
  },
  view8: {
    fontFamily: "SF Pro Text, sans-serif",
  },
  view9: {
    marginTop: 28,
    width: "100%",
    paddingHorizontal: 20,
  },
  view10: {
    color: "#11111",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: 20,
  },
  view11: {
    color: "#515252",
    fontFamily: "Roboto, sans-serif",
    marginTop: 10,
  },
  view12: {
    color: "#8F9090",
    fontFamily: "Roboto, sans-serif",
    marginTop: 21,
  },
  view13: {
    borderRadius: 8,
    borderColor: "rgba(75, 132, 241, 1)",
    borderWidth: 2,
    marginTop: 11,
    padding: 16,
    fontFamily: "Roboto, sans-serif",
  },
  view14: {
    color: "#8F9090",
    fontFamily: "Roboto, sans-serif",
    marginTop: 16,
  },
  view15: {
    borderRadius: 8,
    borderColor: "rgba(143, 144, 144, 1)",
    borderWidth: 1,
    marginTop: 6,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view16: {
    fontFamily: "Roboto, sans-serif",
  },
  image4: {
    width: 20,
    aspectRatio: 1,
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
  view18: {
    alignSelf: "center",
    marginTop: 20,
    fontFamily: "Roboto, sans-serif",
  },
  view19: {
    marginTop: 19,
    width: "100%",
    paddingHorizontal: 20,
  },
  view20: {
    borderRadius: 16,
    borderColor: "rgba(81, 82, 82, 1)",
    borderWidth: 1,
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  view21: {
    color: "#4B84F1",
    fontFamily: "Roboto, sans-serif",
    marginTop: 18,
  },
  view22: {
    color: "#4B84F1",
    fontFamily: "Roboto, sans-serif",
    marginTop: 8,
  },
});

export default MyComponent;
