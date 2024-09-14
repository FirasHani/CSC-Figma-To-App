import * as React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import Header from './const/Header'
import NavBar from './const/NavBar'

function MyComponent() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header/>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profil</Text>
          <View style={styles.row}>
            <View style={styles.avatarContainer}>
              <Image
                resizeMode="cover"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9aa01021f73817094cb73491de300ef352c67c2cce74699ed50c92cb493aeb9f?apiKey=85914d26a88543e9b2a51785ada87893&",
                }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Kokoh Pambudi</Text>
              <Text style={styles.email}>kukuhdesign.mlg@gmail.com</Text>
              <Text style={styles.phone}>+62 819-9862-2425</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pengaturan</Text>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Informasi pribadi</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/35d425a2217558298edfbc3d1a9f86faedccf4a66cf5871b398e6d20bfdea1d9?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.settingImage}
            />
          </View>
          <View style={styles.settingDivider} />
          <View style={styles.setting}>
            <Text style={styles.settingText}>Password</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/67478478bb17d59d4ded2454cba783443814e9f8963925e838fb6d6a1fbf9616?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.settingImage}
            />
          </View>
          <View style={styles.settingDivider} />
          <View style={styles.setting}>
            <Text style={styles.settingText}>ID Card</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4631c500428060a15a2d88aafc05a70fc23351a5303106c81e3de831fbe32440?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.settingImage}
            />
          </View>
          <View style={styles.settingDivider} />
          <Text style={styles.sectionTitle}>Tentang</Text>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Tentang kami</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/68e7ec72a376a664385154951c4f6673c5ba0423d084fe6417894ed6fe965988?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.settingImage}
            />
          </View>
          <View style={styles.settingDivider} />
          <View style={styles.setting}>
            <Text style={styles.settingText}>Pusat bantuan</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/243d07bf36becd5dd341970106efa3719438009cb5d7a3fe0aefcfa079a788c1?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.settingImage}
            />
          </View>
          <View style={styles.settingDivider} />
          <View style={styles.setting}>
            <Text style={styles.settingText}>Keluar</Text>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/599d7dbe67d94930362de83790fb508746f162cc6e50dd6afe846701582daa9d?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.settingImage}
            />
          </View>
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
  container: {
    backgroundColor: "#FFF",
    maxWidth: 360,
    paddingVertical: 51,
    paddingHorizontal: 10,
    flexDirection: "column",
    alignItems: "stretch",
  },
  section: {
    marginBottom: 26,
  },
  sectionTitle: {
    color: "#313333",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto, sans-serif",
    marginBottom: 28,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarContainer: {
    borderRadius: 50,
    overflow: "hidden",
    width: 72,
    height: 72,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "column",
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto, sans-serif",
    color: "#313333",
    letterSpacing: 0.07,
  },
  email: {
    marginTop: 5,
    fontFamily: "Roboto, sans-serif",
    color: "#515252",
    fontSize: 12,
    letterSpacing: 0.06,
  },
  phone: {
    marginTop: 5,
    fontFamily: "Roboto, sans-serif",
    color: "#515252",
    fontSize: 12,
    letterSpacing: 0.06,
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  settingText: {
    fontFamily: "Roboto, sans-serif",
    color: "#313333",
    fontSize: 14,
    letterSpacing: 0.07,
  },
  settingImage: {
    width: 16,
    aspectRatio: 1,
  },
  settingDivider: {
    borderBottomColor: "rgba(242, 242, 242, 1)",
    borderBottomWidth: 1,
    marginTop: 15,
  },
});

export default MyComponent;
