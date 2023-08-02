import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function CustomButton({ title = 'Button', icon, style = {}, onPress = () => {} }) {
  return (
    <TouchableOpacity style={[styles.container,style]} activeOpacity={0.5} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title }</Text>
        <Icon name={icon} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 49,
    width: "100%",
    backgroundColor: "#FE2929",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: "800",
    
    textAlign: "center", 
    flex: 1, 
  },
  icon: {
    color: '#fff',
    fontSize: 20,
      fontWeight: "800",
    right:20
  },
});
