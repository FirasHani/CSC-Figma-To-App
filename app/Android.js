import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,

} from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
function MyComponent() {
    const navigation = useNavigation();

    const handleSubmit=()=>{
        navigation.navigate('Login');
    }
    const handleSubmitHome=()=>{
        navigation.navigate('Home');
    }

  return (
    <View style={styles.view1}>
      <View style={styles.header}>
        <View style={styles.view4}>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e28bb3eb9333bd72967c2171b35acaab5bbd39f62ec223e757ec07186d0d8a07?",
            }}
            style={styles.image1}
          />
          <View style={styles.view5}>
            <Text>MS</Text>
          </View>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea627e3602349f896fed2b718ae96cbaf84f335cb1584c306f3e208bd4445105?",
            }}
            style={styles.image2}
          />
        </View>
        <View style={styles.view6}>
          <Text>9:41 AM</Text>
        </View>
        <View style={styles.view7}>
          <View style={styles.view8}>
            <Text>100%</Text>
          </View>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad54f60f40ec146fcc1078a1bd8886a3329456d97d0ba0ec5edbf19ec8b72f18?",
            }}
            style={styles.image3}
          />
        </View>
      </View>
      <View style={styles.view9}>
        <View style={styles.view10}>
          <Text style={styles.text10}>Wherever you are, ordering D'paragon boarding house is now easier</Text>
        </View>
        <View style={styles.view11}>
          <Text>
            Enjoy maximum service from D'paragon, book more boarding rooms
            easily via the latest application with a more attractive appearance.
          </Text>
        </View>
      </View>
      
      <Image
        resizeMode="auto"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d58848c11f7ad19ffc7f7dc2993683a0038fb0e0bac271d6a70ecd2b724eea64?",
        }}
        style={styles.image4}
      />
      <View style={styles.flexGrow} />
      <View style={styles.view12}>
        <Pressable
          title="Home"
           onPress={handleSubmitHome}
          >
            Order Now
        </Pressable>
      </View>
      <View style={styles.view13}>
        <Text>
             Already have an account?{" "}
          <Pressable
          title="Login"
           onPress={handleSubmit}
          >
            Login
          </Pressable>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
    display: "flex",
    flex: 1,
    maxWidth: 360,
    flexDirection: "column",
    alignItems: "stretch",
  },
  header: {
    backgroundColor: "#4B84F1",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    color: "#FFF",
  },
  view4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image1: {
    width: 15,
    height: 22,
  },
  view5: {
    marginHorizontal: 5,
    color: "#FFF",
  },
  image2: {
    width: 13,
    height: 19,
  },
  view6: {
    textAlign: "center",
    color: "#FFF",
  },
  view7: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    textAlign: "right",
  },
  view8: {
    color: "#FFF",
  },
  image3: {
    width: 25,
    height: 11,
  },
  view9: {
    display: "flex",
    marginTop: 47,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 43px 0 16px",
    paddingLeft:20,
    paddingBottom:40
  },
  view10: {
    color: "#313333",
    fontFeatureSettings: "'clig' off, 'liga' off",
    letterSpacing: 0.4,
    textTransform: "capitalize",
    font: "700 20px/30px Roboto, sans-serif ",
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
    color: "#8F9090",
    fontFeatureSettings: "'clig' off, 'liga' off",
    letterSpacing: 0.12,
    marginTop: 24,
    font: "400 12px/22px Roboto, sans-serif ",
    
  },
  view12: {
    backgroundColor: "#4B84F1",
    alignItems: "center",
    position: "absolute",
    borderRadius: 16,
    boxShadow: "-2px 4px 10px 0px rgba(75, 132, 241, 0.20)",
    marginTop: 500,
    marginLeft: 60,
    width:250,
    height:30,
    padding:5

  
  },
  view13: {
    marginTop: 540,
    marginLeft: 70,
    position: "absolute",
  },
  image4: {
    width: "100%",
    aspectRatio: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
});

export default MyComponent;
