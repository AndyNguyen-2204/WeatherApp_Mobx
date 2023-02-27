import React, { useContext } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { store } from '../../context/store';
import Icon from 'react-native-vector-icons/Entypo'
import GeneralInformation from '../../src/components/generalInformation/generalInformation';
import UvIndex from '../../src/components/uvIndex/uvIndex';
import Sunrise from '../../src/components/sunrise/sunrise';
export default function WeatherDetail() {
  const globalState = useContext(store);
  console.log("🚀 ~ file: weatherDetail.js:7 ~ WeatherDetail ~ globalState:", globalState)
  // const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={{backgroundColor:"#708090",height:"100%",width:" 100%",paddingHorizontal:15}}>
      <View style={styles.topContent}>
          <Text style={styles.title}>{globalState?.state?.city}</Text>
          <View style={{flexDirection:"row",alignSelf:"center"}}>
          <Text style={styles.temperature}>{Math.round(globalState?.state?.data?.current.temp)}°</Text>
          <Text style={{fontSize:20,fontWeight:700,lineHeight:24,color:"#B8B8B8"}}> | </Text>
          <Text style={styles.weather}>{globalState?.state?.data?.current.weather[0].description}</Text>
          </View>
        </View>
      <GeneralInformation globalState={globalState}/>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginTop:13}}>
      <UvIndex globalState={globalState}/>
      <Sunrise globalState={globalState}/>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  topContent: {
    alignSelf: "center",
    height:100, 
    width:"100%",
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
