import * as React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from './const/Header';
import NavBar from './const/NavBar';

function MyComponent() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Notifcation');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6048e91eb79f51b7743e36406eb6aedca20bd66c0bf587fe4efa9327c73fa3b?apiKey=85914d26a88543e9b2a51785ada87893&",
            }}
            style={styles.profileImage}
          />
         
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea627e3602349f896fed2b718ae96cbaf84f335cb1584c306f3e208bd4445105?apiKey=85914d26a88543e9b2a51785ada87893&",
            }}
            style={styles.statusIcon}
          />
        </View>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8810ecf1c32feae54dce7aa10d7b46bdea0947f5228b97575ffd300a64bed1b?apiKey=85914d26a88543e9b2a51785ada87893&",
          }}
          style={styles.backgroundImage}
        />
        <Text style={styles.messageText}>Message</Text>
        <View style={styles.messagesContainer}>
          <View style={styles.incomingMessages}>
            <Text>Incoming messages</Text>
          </View>
          <View style={styles.notificationButtonContainer}>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text>Notifications</Text>
            </Pressable>
          </View>
        </View>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/445c75b003d7ad17f43b57f492730a45477a68596af0698b3fe41644339a6cde?apiKey=85914d26a88543e9b2a51785ada87893&",
          }}
          style={styles.emptyMessagesImage}
        />
        <Text style={styles.emptyMessagesText}>
          Pesan masuk masih kosong , tapi tenang kami nanti kabarin kamu kok
        </Text>
      </View>
      <NavBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#FFF", // Adjust background color if needed
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInitials: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  backgroundImage: {
    width: "100%",
  
    marginBottom: 20,
  },
  messageText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messagesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  incomingMessages: {
    flex: 1,
    alignItems: "flex-start",
  },
  notificationButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4B84F1",
    borderRadius: 10,
  },
  emptyMessagesImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyMessagesText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default MyComponent;
