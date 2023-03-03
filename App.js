import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screen/home/Home';
import { observer } from 'mobx-react';
import TabBottom from './src/components/navigation/tabBottom/tabBottom';
  const App=observer(()=>{
  return(
     <TabBottom/>
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
