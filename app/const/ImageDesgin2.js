// image desgin 

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

function MyComponent() {
  return (
    <View style={styles.view1}>
      <Image
        resizeMode="auto"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e922fd80be31e5de7915758bb757694b2108e409056bc743681feb863659776?",
        }}
        style={styles.image1}
      />
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text>Surabaya</Text>
        </View>
        <View style={styles.view4}>
       
     
        </View>
      </View>
      <View style={styles.view6}>
        <View style={styles.view7}>
          <Text>12 Properti Tersedia</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    borderRadius: 8,
    boxShadow: "1px 3px 10px 0px rgba(0, 0, 0, 0.10)",
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 145,
    flexDirection: "column",
    alignItems: "stretch",
  },
  image1: { position: "relative", width: "100%", aspectRatio: "1.27" },
  view2: {
    display: "flex",
    marginTop: 6,
    alignItems: "stretch",
    gap: 20,
    whiteSpace: "nowrap",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  view3: {
    color: "#313333",
    fontFeatureSettings: "'clig' off, 'liga' off",
    letterSpacing: 0.21,
    font: "700 14px Roboto, sans-serif ",
  },
  view4: {
    borderRadius: 8,
    backgroundColor: "#F8F9FB",
    display: "flex",
    alignItems: "stretch",
    gap: 3,
    fontSize: 10,
    color: "#515252",
    fontWeight: "400",
    padding: "5px 4px",
  },
  view5: {
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Roboto, sans-serif",
  },
  image2: {
    fill: "#FC9332",
    alignSelf: "start",
    position: "relative",
    width: 8,
    flexShrink: 0,
    aspectRatio: "1.14",
  },
  view6: {
    borderRadius: 8,
    backgroundColor: "#F8F9FB",
    display: "flex",
    marginTop: 6,
    alignItems: "stretch",
    gap: 2,
    fontSize: 10,
    color: "#515252",
    fontWeight: "400",
    padding: "3px 20px 3px 3px",
  },
  image3: {
    alignSelf: "start",
    position: "relative",
    width: 10,
    flexShrink: 0,
    aspectRatio: "1",
  },
  view7: {
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Roboto, sans-serif",
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "auto",
  },
});


export default MyComponent