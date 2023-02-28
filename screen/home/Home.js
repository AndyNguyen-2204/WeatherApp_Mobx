import React, { useContext } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import HourlyForecast from "../../src/components/hourlyForecast/index"
import { store } from "../../context/store"
export default function Home() {
  const globalState = useContext(store);
  console.log("🚀 ~ file: Home.js:7 ~ Home ~ globalState:", globalState)
  return (
    <SafeAreaView style={styles.wrapHomeScreen}>
      <Image source={require("../../assets/homeImg/morning.jpeg")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
      <View style={styles.wrapContent}>
        <View style={styles.topContent}>
          <Text style={styles.title}>{globalState?.state?.city}</Text>
          <Text style={styles.temperature}>{Math.round(globalState?.state?.data?.current.temp)}°</Text>
          <Text style={styles.weather}>{globalState?.state?.data?.current.weather[0].description}</Text>
        </View>
        <View style={styles.botContent}>
          <HourlyForecast />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapHomeScreen: {
    position: "relative",
  },
  wrapContent: {
    position: "absolute",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topContent: {
    alignSelf: "center",
    marginTop: 28,
    width:"100%",
    textAlign:"center"
  },
  title: {
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 41,
    textAlign:"center",
    color:"#000000"
  },
  temperature: {
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: 0.37,
    fontWeight: "400",
    marginTop: 12,
    textAlign:"center",
     color:"#000000"
  },
  weather: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    textTransform: "capitalize",
    textAlign:"center",
     color:"#000000"
  },
  botContent: {
    height: 280
  }
})
