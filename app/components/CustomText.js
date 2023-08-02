import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function CustomText({title='',style={}}) {
  return (
    
      <Text style={[styles.text,style]}>{title}</Text>
    
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        fontWeight: "600",
        color: "#FFFFFF",
        // lineHeight:34
    }
})