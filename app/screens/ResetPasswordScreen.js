import {View, Text, Pressable, StyleSheet,} from 'react-native';
import React, { useState,useEffect } from 'react';
import axios from "axios"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import Snackbar from 'react-native-snackbar';
// ----------------------custom import
import Card from '../components/Card';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { RESET_PASSWORD } from '../constants/api';
import ErrorText from '../components/ErrorText';
// ---------------------
export default function ResetPasswordScreen({navigation,route}) {
  const [newPassword, setNewPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [resetOtp, setResetOtp] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [error,setError]=useState('')
  const {otp,phoneNumber}= route.params
// ----------------------
 

useEffect(()=>{
setError('')
},[newPassword])




  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const formData=new FormData()
formData.append("phone_number",phoneNumber)
formData.append("password",newPassword)

  function handleResetPassword() {

    if (otp === parseInt(resetOtp)) {
      
      if (!passwordPattern.test(newPassword)) {
      setError("Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.")
    
    }else if (newPassword !== matchPassword) {
        setError("Password does not match")
    }
    
    else{
      axios({
        method:"post",
        url:RESET_PASSWORD,
        data:formData,
        headers:{
          Accept:"application/json",
          "content-type":"multipart/form-data"
        }
      }).then(response=>{
        if(response.data.status_code === "01"){
          Snackbar.show({
            text: "Password changed succesfully",
            duration:Snackbar.LENGTHSHORT
          })
          setTimeout(()=>{
            navigation.navigate("SignIn")
          },2000)
          
          
        }
      })
      .catch(error=>console.log(error.data))
    }

    
    } else{
      Snackbar.show({
        text: "Otp does not match",
        duration: Snackbar.LENGTH_SHORT,
        
      })
      return 
  }
  }



















  // ---------------------
  console.log(otp)
// ----------------------

  return (
    <Card
      title="Reset Password"
      title1="Reset your"
      title2="password"
      description={`We have send the verification to your mobile number  +${phoneNumber} `}>
      <View
        style={{
          gap: 15,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: '7%',
        }}>
        <View
          style={{
            height: 48,
            borderRadius: 10,
            position: 'relative',
            justifyContent: 'center',
          }}>
          <CustomTextInput
            keyboardType="number-pad"
            placeholder="Enter OTP"
            value={resetOtp}
            onChangeText={(value) => setResetOtp(value)}></CustomTextInput>
        
        </View>
        <CustomTextInput
          secureTextEntry={showPassword}
          onPress={() => setShowPassword(!showPassword)}
          placeholder="Create your password"
          icon="eye"
          value={newPassword}
          onChangeText={value => setNewPassword(value)}></CustomTextInput>
        {error && <ErrorText>{error}</ErrorText>}
        <CustomTextInput
          secureTextEntry={showNewPassword}
          onPress={() => setShowNewPassword(!showNewPassword)}
          placeholder="Re-enter your password"
          icon="eye"
          value={matchPassword}
          onChangeText={value => setMatchPassword(value)}></CustomTextInput>
        <CustomButton title="RESET" style={{marginTop: 4}} onPress={handleResetPassword} ></CustomButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
 
});
