import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";

function MyComponent() {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d2d7e79a77bd76b50ac5bc7a6f986d06180b5c6dfef3a8604ce71fc9d4358ce?",
      }}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
  
        <View style={styles.content}>
          <View style={styles.headerText}>
            <Text style={styles.subtext}>COMPLETE YOUR DATA</Text>
          </View>
          <View style={styles.headerSubtext}>
            <Text style={styles.subtext}>CAN</Text>
          </View>
          <View style={styles.headerSubtext}>
            <Text style={styles.subtext}>DISCOUNT</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.discountContainer}>
              <View style={styles.discountTextContainer}>
                <Text style={styles.discountText}>40%</Text>
                <Text style={styles.checkNowText}>CHECK NOW
                </Text>
              </View>
            </View>
            <ImageBackground
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/49ee5a8da042292e57bf3d9d8ca02d00f4fbe4cd3ab68460da1a1566b9281f6a?",
              }}
              style={styles.checkNowIcon}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  logoText: {
    backgroundColor: "#4B84F1",
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  logoTextInner: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  logoIcon: {
    width: 13,
    height: 13,
    marginLeft: 5,
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "#FFF",
    fontWeight: "600",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusTextContainer: {
    backgroundColor: "#4B84F1",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  statusIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.16,
    marginBottom: 10,
  },
  headerSubtext: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 0.56,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  discountContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  discountTextContainer: {
    backgroundColor: "#4B84F1",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  discountText: {
    color: "#FFF",
    fontSize: 50,
    fontWeight: "bold",
  },
  checkNowText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  checkNowIcon: {
    width: 12,
    height: 12,
    marginLeft: 5,
  },
  subtext: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.48,
  },
});

export default MyComponent;
