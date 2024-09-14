// image desgin 

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function MyComponent() {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/hotels/showHotel");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // for(let i=0;i<data.hotel.length;i++){
        //   console.log(data.hotel[i])
        //   setHotelData(data.hotel[i])
        // }
        setHotelData(data)
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };
    fetchHotelData()
    
  }, []);
  
    console.log(hotelData.hotel)
    return (
      <View style={styles.view1}>
        {hotelData?.hotel?.length > 0 ? (
          hotelData.hotel.map((hotel, index) => (
            <View key={index} style={styles.hotelContainer}>
              <Image
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e922fd80be31e5de7915758bb757694b2108e409056bc743681feb863659776?",
                }}
                style={styles.image1}
              />
              <View style={styles.view2}>
                <View style={styles.view3}>
                  <Text>{hotel.name}</Text>
                  <Text>{hotel.location}</Text>
                  <Text>{hotel.desc}</Text>
                </View>
                <View style={styles.view4}>
                  <View style={styles.view5}>
                    <Text>{hotel.rating}</Text>
                  </View>
                  <Image
                    resizeMode="auto"
                    source={{
                      uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e922fd80be31e5de7915758bb757694b2108e409056bc743681feb863659776?",
                    }}
                    style={styles.image2}
                  />
                </View>
              </View>
              <View style={styles.view6}>
                <Image
                  resizeMode="auto"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e922fd80be31e5de7915758bb757694b2108e409056bc743681feb863659776?",
                  }}
                  style={styles.image3}
                />
                <View style={styles.view7}>
                  <Text>12 Properti Tersedia</Text> {/* Static text, update if necessary */}
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  };
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