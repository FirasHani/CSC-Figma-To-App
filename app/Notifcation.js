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
ImageBackground
} from "react-native";
import Header from './const/Header'
import NavBar from './const/NavBar'

function MyComponent() {
return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <Header/>
    <View style={styles.view1}>
    <View style={styles.view2}>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <ImageBackground
            resizeMode="cover"
            fitContent
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e28bb3eb9333bd72967c2171b35acaab5bbd39f62ec223e757ec07186d0d8a07?apiKey=85914d26a88543e9b2a51785ada87893&",
            }}
            style={styles.image1}
          >
            <ImageBackground
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e28bb3eb9333bd72967c2171b35acaab5bbd39f62ec223e757ec07186d0d8a07?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.image2}
            />
          </ImageBackground>
          <ImageBackground
            resizeMode="cover"
            fitContent
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea627e3602349f896fed2b718ae96cbaf84f335cb1584c306f3e208bd4445105?apiKey=85914d26a88543e9b2a51785ada87893&",
            }}
            style={styles.image3}
          >
            <ImageBackground
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea627e3602349f896fed2b718ae96cbaf84f335cb1584c306f3e208bd4445105?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.image4}
            />
          </ImageBackground>
        </View>
        <View style={styles.view6}>
          <ImageBackground
            resizeMode="cover"
            fitContent
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad54f60f40ec146fcc1078a1bd8886a3329456d97d0ba0ec5edbf19ec8b72f18?apiKey=85914d26a88543e9b2a51785ada87893&",
            }}
            style={styles.image5}
          >
            <ImageBackground
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad54f60f40ec146fcc1078a1bd8886a3329456d97d0ba0ec5edbf19ec8b72f18?apiKey=85914d26a88543e9b2a51785ada87893&",
              }}
              style={styles.image6}
            />
          </ImageBackground>
        </View>
      </View>
  
      <View style={styles.view9}>
        <View style={styles.view10}>
          <Text>Incoming messages</Text>
        </View>
        <View style={styles.view11}>
          <Text>Notifications</Text>
        </View>
      </View>
    </View>
    <View style={styles.view12} />
    <View style={styles.view13}>
      <View style={styles.view14}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/11216733efc6bcac210454fa6b6eb3b5be56169f9165adda0fdc1be6dc311c91?apiKey=85914d26a88543e9b2a51785ada87893&",
          }}
          style={styles.image7}
        />
        <View style={styles.view15}>
          <Text>Selamat Datang</Text>
        </View>
      </View>
      <Image
        resizeMode="auto"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/95c55deda417ec8a7196ccace404aac155e76f4e51cdaf571c61143fde535e5c?apiKey=85914d26a88543e9b2a51785ada87893&",
        }}
        style={styles.image8}
      />
    </View>
    <View style={styles.view16}>
      <Text>
        Halo, selamat datang di aplikasi D’paragon silahkan lakukan verifikasi
        data kamu dan dapatkan banyak benefit dari kami . Terima kasih
      </Text>
    </View>
    <View style={styles.view17} />
  </View>
<NavBar/>
</ScrollView>
);
}

const styles = StyleSheet.create({
view1: {
  backgroundColor: "#FFF",
  display: "flex",
  maxWidth: 360,
  paddingBottom: 80,
  flexDirection: "column",
  alignItems: "stretch",
},
view2: {
  display: "flex",
  marginTop: 5,
  width: "100%",
  flexDirection: "column",
  alignItems: "stretch",
  padding: "0 20px",
},
view3: { display: "flex", width: "100%", alignItems: "stretch", gap: 20 },
view4: {
  alignSelf: "start",
  display: "flex",
  alignItems: "stretch",
  gap: 4,
  flex: "1",
},
image1: {
  fill: "#FFF",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  aspectRatio: "1.49",
  width: 15,
  alignItems: "center",
  justifyContent: "center",
},
image2: {
  fill: "#FFF",
  position: "relative",
  width: "100%",
  aspectRatio: "1.49",
},
view5: {
  color: "#FFF",
  font: "400 12px SF Pro Text, sans-serif ",
},
image3: {
  fill: "#FFF",
  overflow: "hidden",
  alignSelf: "start",
  position: "relative",
  display: "flex",
  aspectRatio: "1.45",
  width: 13,
  alignItems: "center",
  justifyContent: "center",
},
image4: {
  fill: "#FFF",
  position: "relative",
  width: "100%",
  aspectRatio: "1.45",
},
view6: { display: "flex", alignItems: "stretch", gap: 3, flex: "1" },
view7: {
  color: "#FFF",
  textAlign: "right",
  flexGrow: "1",
  font: "400 12px SF Pro Text, sans-serif ",
},
image5: {
  overflow: "hidden",
  position: "relative",
  display: "flex",
  aspectRatio: "2.27",
  width: 25,
  alignItems: "center",
  justifyContent: "center",
},
image6: { position: "relative", width: "100%", aspectRatio: "2.27" },
view8: {
  color: "#313333",
  fontFeatureSettings: "'clig' off, 'liga' off",
  alignSelf: "start",
  marginTop: 36,
  font: "700 18px Roboto, sans-serif ",
},
  
view9: {
  flexDirection: 'row', // Ensure items are in a row
  borderRadius: 20,
  backgroundColor: '#E4E4E4',
  alignSelf: 'center',
  display: 'flex',
  marginTop: 28,
  alignItems: 'center', // Center items vertically
  gap: 20,
  fontSize: 14,
  fontWeight: '500',
  justifyContent: 'space-between',
  padding: '5px 6px 5px 33px',
},
view10: {
  color: '#8F9090',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Roboto, sans-serif',
  margin: 'auto 0',
},
view11: {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 20,
  boxShadow: '1px 3px 10px 0px rgba(0, 0, 0, 0.10)',
  backgroundColor: '#FFF',
  alignItems: 'stretch',
  color: '#4B84F1',
  whiteSpace: 'nowrap',
  justifyContent: 'center',
  padding: '12px 36px',
  height:30
},
view12: {
  borderColor: "rgba(242, 242, 242, 1)",
  borderStyle: "solid",
  borderWidth: 1,
  backgroundColor: "#F2F2F2",
  minHeight: 1,
  marginTop: 31,
  width: "100%",
},
view13: {
  alignSelf: "center",
  display: "flex",
  marginTop: 30,
  width: "100%",
  maxWidth: 328,
  alignItems: "stretch",
  gap: 20,
  fontSize: 12,
  color: "#313333",
  fontWeight: "500",
  letterSpacing: 0.06,
  justifyContent: "space-between",
},
view14: { display: "flex", alignItems: "stretch", gap: 16 },
image7: { position: "relative", width: 20, flexShrink: 0, aspectRatio: "1" },
view15: {
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "Roboto, sans-serif",
  margin: "auto 0",
},
image8: {
  alignSelf: "start",
  position: "relative",
  width: 16,
  flexShrink: 0,
  aspectRatio: "1",
},
view16: {
  color: "#515252",
  fontFeatureSettings: "'clig' off, 'liga' off",
  letterSpacing: 0.06,
  alignSelf: "center",
  marginTop: 9,
  width: 278,
  font: "400 12px/19px Roboto, sans-serif ",
},
view17: {
  borderColor: "rgba(242, 242, 242, 1)",
  borderStyle: "solid",
  borderWidth: 1,
  backgroundColor: "#F2F2F2",
  minHeight: 1,
  marginTop: 20,
  width: "100%",
},
});
export default MyComponent