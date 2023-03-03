import moment from 'moment'
import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useStores } from '../../../context/rootStore';
export default function DewPoint() {
  const {weatherStore,weatherDetail}=useStores()
  return (
    <SafeAreaView style={styles.wrapUvIndex}>
    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
       <Icon1 name='weather-fog' color={"#ffffff"} size={25} />
       <Text style={{textTransform:"capitalize",color:"#ffffff"}}>Dew point</Text>
       </View>
       <Text style={{fontSize:20,color:"#ffffff",alignSelf:"center",marginTop:35}}>{weatherDetail.weatherDetail.data?weatherDetail.weatherDetail.data.dew_point:weatherStore.weatherCity.weather.data.daily[0].dew_point}</Text>
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
  }
})
