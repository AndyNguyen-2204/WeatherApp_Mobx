import React from 'react'
import {StyleSheet, Text, View} from "react-native"
import Icon from 'react-native-vector-icons/Entypo'
import { useStores } from '../../../context/rootStore';
export default function GeneralInformation() {
  const {weatherStore,weatherDetail}=useStores()
  return (
    <View style={styles.generalInformation}>
       <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='info-with-circle' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>general Information</Text>
       </View>
       <View style={{flexDirection:"row",flexWrap:"wrap",gap:10,marginTop:20}}>
        <Text style={styles.textInfo}>Nhiệt độ ban ngày : {weatherDetail.weatherDetail.data?Math.round(weatherDetail.weatherDetail.data.temp.morn):Math.round(weatherStore.weatherCity.weather
          .data.daily[0].temp.morn)}°</Text>
        <Text style={styles.textInfo}>Độ ẩm : {weatherDetail.weatherDetail.data?weatherDetail.weatherDetail.data.humidity:weatherStore.weatherCity.weather
          .data.daily[0].humidity}%</Text>
        <Text style={styles.textInfo}>Áp lực : {weatherDetail.weatherDetail.data?weatherDetail.weatherDetail.data.pressure:weatherStore.weatherCity.weather
          .data.daily[0].pressure} hPa</Text>
        <Text style={styles.textInfo}>Nhiệt độ về đêm : {weatherDetail.weatherDetail.data?Math.round(weatherDetail.weatherDetail.data.temp.night):Math.round(weatherStore.weatherCity.weather
          .data.daily[0].temp.night)}°</Text>
        <Text style={styles.textInfoo}>Nhiệt độ trung bình ngày : {weatherDetail.weatherDetail.data?Math.round(weatherDetail.weatherDetail.data.temp.day):Math.round(weatherStore.weatherCity.weather.data.daily[0].temp.day)}°</Text>
       </View>
      </View>
  )
}
const styles=StyleSheet.create({
  generalInformation:{
    width:"100%",
    backgroundColor:"#272251",
    height:158,
    borderWidth:1,
    borderRadius:22,
    borderColor:"#DDA0DD",
    paddingHorizontal:10,
    paddingTop:10
  },
  textInfo:{
    width:"48%",
    color:"#ffffff"
  },
  textInfoo:{
    width:"100%",
    color:"#ffffff"
  }
})