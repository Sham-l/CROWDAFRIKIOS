import {View, TextInput, StyleSheet} from 'react-native';
import React,{useEffect,useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function CustomTextInput({
  onChangeText,
  value,
  secureTextEntry,
  icon,
  placeholder,
  keyboardType,
  onPress,
  style
}) {
  return (
    <View
      style={[{
        alignItems: 'center',
        flexDirection: 'row',
        height: 44,
        // marginVertical:10,
      
        
      },style]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        
        style={[
          styles.textInput,
        
        ]}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#7D7463"
        onChangeText={onChangeText}></TextInput>
      <Icon
        style={{position: 'absolute', right: 10}}
        name={icon}
        size={18}
        color="#CDCDCD"
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    width: "100%",
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal: 20,
    color:"black"
  },
});
