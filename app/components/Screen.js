import { SafeAreaView,StyleSheet,Platform,StatusBar } from 'react-native'
import React from 'react'

export default function Screen({children,color}) {
  return (
    <SafeAreaView style={[styles.container, { background: color }]}>
      
     {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems:"flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    }
})