import { SafeAreaView,StyleSheet,Platform,StatusBar } from 'react-native'
import React from 'react'

export default function Screen({children,color}) {
  console.log(Platform.OS)
  return (
    <SafeAreaView style={[styles.container, { background: color }]}>
      
     {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})