import {Pressable, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
export default function BackButton({onPress}) {
  const navigation = useNavigation()
  return (
    <Pressable
    onPress={onPress}
      style={{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        marginLeft: 20,
        borderRadius: 12,
        borderColor: 'white',
      }}>
      <Icon name="chevron-left" color="white" size={ 15} ></Icon>
      
    </Pressable>
  );
}
