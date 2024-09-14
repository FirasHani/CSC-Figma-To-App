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

function MyComponent(){
return (
    <View style={styles.view2}>
    <View style={styles.headerContainer}>
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
  </View>
    
)
}

const styles = StyleSheet.create({
    view1: {
      backgroundColor: "#FFF",
      display: "flex",
      maxWidth: 360,
      paddingBottom: 80,
      flexDirection: "column",
      alignItems: "stretch",
      fontSize: 12,
      fontWeight: "400",
    },
    view2: {
      backgroundColor: "#4B84F1",
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "stretch",
      color: "#FFF",
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
    image3: {
      width: 25,
      height: 11,
    },
    view9: {
      display: "flex",
      marginTop: 28,
      width: "100%",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "0 20px",
      
    },
    view10: {
      color: "#11111", 
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold", 
      fontSize: 100, 
      
    },
    view11: {
      color: "#515252",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      marginTop: 10,
    },
    view12: {
      color: "#8F9090",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      marginTop: 21,
    },
    view13: {
      fontFeatureSettings: "'clig' off, 'liga' off",
      borderRadius: 8,
      borderColor: "rgba(75, 132, 241, 1)",
      borderStyle: "solid",
      borderWidth: 2,
      marginTop: 11,
      alignItems: "start",
      color: "#8F9090",
      letterSpacing: 0.07,
      justifyContent: "center",
      padding: 16,
      font: "14px Roboto, sans-serif ",
    },
    view14: {
      color: "#8F9090",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      marginTop: 16,
    },
    view15: {
      borderRadius: 8,
      borderColor: "rgba(143, 144, 144, 1)",
      borderStyle: "solid",
      borderWidth: 1,
      display: "flex",
      marginTop: 6,
      alignItems: "stretch",
      gap: 20,
      fontSize: 14,
      color: "#8F9090",
      letterSpacing: 0.07,
      justifyContent: "space-between",
      padding: "13px 16px",
    },
    view16: {
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      margin: "auto 0",
    },
    image4: { position: "relative", width: 20, flexShrink: 0, aspectRatio: "1" },
    view17: {
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      borderRadius: 16,
      backgroundColor: "#A5C2F8",
      marginTop: 24,
      alignItems: "center",
      color: "#FFF",
      fontWeight: "500",
      whiteSpace: "nowrap",
      letterSpacing: 0.24,
      justifyContent: "center",
      paddingVertical: 15, // Adjust the vertical padding
      paddingHorizontal: 40, // Adjust the horizontal padding
      height: 40, // Adjust the height
    },
    
    view18: {
      color: "#313333",
      fontFeatureSettings: "'clig' off, 'liga' off",
      letterSpacing: 0.07,
      alignSelf: "center",
      marginTop: 20,
      font: "14px Roboto, sans-serif ",
    },
    view19: {
      display: "flex",
      marginTop: 19,
      width: "100%",
      flexDirection: "column",
      alignItems: "stretch",
      fontWeight: "500",
      padding: "0 20px",
    },
    view20: {
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      borderRadius: 16,
      borderColor: "rgba(81, 82, 82, 1)",
      borderStyle: "solid",
      borderWidth: 1,
      alignItems: "stretch",
      color: "#515252",
      letterSpacing: 0.24,
      justifyContent: "center",
      padding: "18px 60px",
      paddingVertical: 15, // Adjust the vertical padding
      paddingHorizontal: 40, // Adjust the horizontal padding
      height: 40, // Adjust the height
    },
    view21: {
      color: "#4B84F1",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "400",
      marginTop: 18,
    },
    view22: {
      color: "#4B84F1",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Roboto, sans-serif",
      marginTop: 8,
    },
  });
  
export default MyComponent