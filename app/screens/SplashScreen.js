import { View,Image } from 'react-native'
import React from 'react'




export default function SplashScreen() {
 
  return (
      <View style={{ flex: 1, backgroundColor: "#2C2D2F", justifyContent: 'center', alignItems: 'center' }}>
          
          <Image source={require("../assets/CrowdAfrik.png")} style={{height:"20%",width:'70%'}}></Image>
      
    </View>
  )
}
