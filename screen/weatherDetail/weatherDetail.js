import React, { useContext } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import GeneralInformation from '../../src/components/generalInformation/generalInformation';
import UvIndex from '../../src/components/uvIndex/uvIndex';
import Sunrise from '../../src/components/sunrise/sunrise';
import Wind from '../../src/components/wind/wind';
import DewPoint from '../../src/components/dewPoint/dewPoint';
import FeelsLike from '../../src/components/feelsLike/feelsLike';
import Humidity from '../../src/components/humidity/humidity';
import moment from 'moment';
import { observer } from 'mobx-react';
import { useStores } from '../../context/rootStore';
  const WeatherDetail=observer(()=>{
  const windowHeight = Dimensions.get('window').height;
  const {weatherStore,weatherDetail}=useStores()
  console.log("🚀 ~ file: weatherDetail.js:17 ~ WeatherDetail ~ weatherDetail:", weatherDetail)
  return (
    <SafeAreaView style={{backgroundColor:"#708090",height:"100%",width:" 100%",paddingHorizontal:15}}>
      <View style={styles.topContent}>
          <Text style={styles.title}>{weatherStore?.weatherCity?.city}</Text>
          <View style={{flexDirection:"row",alignSelf:"center"}}>
          <Text style={styles.temperature}>{weatherDetail.weatherDetail?Math.round(weatherDetail.weatherDetail.data.temp.day):Math.round(weatherStore.weatherCity.weather
          .data.daily[0].temp.day)}°</Text>
          <Text style={{fontSize:20,fontWeight:700,lineHeight:24,color:"#B8B8B8"}}> | </Text>
          <Text style={styles.weather}>{weatherDetail.weatherDetail?weatherDetail.weatherDetail.data.weather[0].description:weatherStore.weatherCity.weather
          .data.daily[0].weather[0].description}</Text>
          </View>
          <Text style={{fontSize:20,fontWeight:"600",lineHeight:24, color:"#B8B8B8",alignSelf:"center",marginTop:5}}>{weatherDetail.weatherDetail? moment.unix(weatherDetail.weatherDetail.data.dt).format('DD-MM-YYYY'): moment.unix(weatherStore.weatherCity.weather
          .data.daily[0].dt).format('DD-MM-YYYY')}</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <GeneralInformation/>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginVertical:10,gap:10}}>
      <UvIndex/>
      <Sunrise/>
      <Wind/>
      <DewPoint/>
      <FeelsLike/>
      <Humidity/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
})
export default WeatherDetail
const styles=StyleSheet.create({
  topContent: {
    alignSelf: "center",
    width:"100%",
    paddingBottom:10
  },
  title: {
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 41,
    textAlign:"center",
    color:"#ffffff",
    letterSpacing:0.37,
    marginTop:8
  },
  temperature: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    fontWeight: "600",
     color:"#B8B8B8",
  },
  weather: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    fontWeight: "600",
    textTransform: "capitalize",
     color:"#B8B8B8",
  },
})
