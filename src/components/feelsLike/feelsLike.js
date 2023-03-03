import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useStores } from '../../../context/rootStore';
export default function FeelsLike() {
  const {weatherStore,weatherDetail}=useStores()
  return (
    <SafeAreaView style={styles.wrapUvIndex}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon name='thermometer-three-quarters' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>Feels Like</Text>
       </View>
       <Text style={{fontSize:30,color:"#ffffff",alignSelf:"center",fontWeight:"600"}}>{weatherDetail.weatherDetail.data? Math.round(weatherDetail.weatherDetail.data.feels_like.day):Math.round(weatherStore.weatherCity.weather.data.daily[0].feels_like.day)}°</Text>
       <Text style={{color:"#ffffff",fontWeight:"400"}}>Nhiệt độ cảm giác trong ngày</Text>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  wrapUvIndex:{
    width:"48%",
    height:158,
    borderWidth:1,
    borderRadius:22,
    borderColor:"#DDA0DD",
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:"#272251",
    flexDirection:"column",
    justifyContent:"space-between"
  }
})
