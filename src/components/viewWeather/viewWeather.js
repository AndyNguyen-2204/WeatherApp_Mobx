import moment from 'moment'
import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native"
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import { ativeViewWeather, renderIcon } from "./functionHelper"
export default function ViewWeather({ data, valueTab }) {

  return (
    <TouchableOpacity style={[styles.wrapViewWeather, ativeViewWeather(data.dt, valueTab) ? styles.active : ""]}>
      <Text style={styles.topContent}>{valueTab === 1 ? moment.unix(data.dt).format('LT') : moment.unix(data.dt).format('DD-MM')}</Text>
      <Text>
        {renderIcon(data?.weather[0].main, data?.uvi)}
      </Text>
      <Text style={styles.botContent}>{valueTab === 1 ? Math.round(data.temp) : Math.round(data.temp.day)}°</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  wrapViewWeather: {
    width: 80,
    borderRadius: 30,
    height: 146,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 33,
    borderWidth: 1,
    borderColor: "#FFDEAD",
    marginRight: 12
  },
  active: {
    backgroundColor: "#555555"
  },
  topContent: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    color: "#ffffff",
    letterSpacing: -0.408,
    marginTop: 11
  },
  botContent: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    color: "#ffffff",
    letterSpacing: -0.408,
    marginBottom: 20
  }
})
