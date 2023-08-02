import {View, Text, StyleSheet, Image,KeyboardAvoidingView,Platform} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import BackButton from '../components/BackButton';

// -------------------------
import Screen from './Screen';
import CustomText from './CustomText';
// -------------------------------
export default function Card({ children, title='', title1='', title2='', description='',showBackBtn,style={},hide}) {
  
  const navigation=useNavigation()
  return (
    <View style={{flex: 1,backgroundColor:"#2C2D2F"}}>
      <Screen>
        {!showBackBtn && <BackButton onpress={() => navigation.goBack()}></BackButton>}
        <View style={{alignItems: 'center',width:"100%"}}>
          <Image
            resizeMode="cover"
            style={[{height: 84, width: 161},style]}
            source={require('../assets/CrowdAfrik.png')}></Image>
        </View>
        {/* Text */}
        <View style={{marginLeft:35,marginTop:55,width:"100%"}}>
          <CustomText title={title1}></CustomText>
          <CustomText title={title2}></CustomText>
          <Text style={{ color: "white", lineHeight: 16,width:"70%",marginTop:4 }}>{description }</Text>

        </View>
        {!hide && <KeyboardAvoidingView  style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
          </View>
          {children}
        </KeyboardAvoidingView>}
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 317,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal:1,
    paddingTop: 30,
    paddingBottom:20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: 19,
  },
  view: {
    width: "100%",paddingHorizontal:30
  },
});
