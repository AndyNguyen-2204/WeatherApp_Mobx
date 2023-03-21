import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Home from './screen/home/Home';
import { observer } from 'mobx-react';
import TabBottom from './src/components/navigation/tabBottom/tabBottom';
  const App=observer(()=>{
    const [nullData,setNullData]=useState(true)
    setTimeout(function(){
      setNullData(false)
  }, 2000);
  return(
   <>
   {nullData? <Image source={require("./assets/homeImg/firstScreen.jpg")} style={{ height: "100%", width: "100%", resizeMode: "cover",zIndex:1000}} />:
   <TabBottom/>
   }
   </>
     
  );
})
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
