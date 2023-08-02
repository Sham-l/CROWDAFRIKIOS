import {View, Text,Alert,Platform} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
// ------------Custom import
import Card from '../components/Card';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {REGISTER} from '../constants/api';
// ---------------------------
export default function VerifyPhone({route,navigation}) {
  const [uotp, setUOtp] = useState(null);
  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const { fullName, email, phoneNumber, stateId, countryId,otp } = route.params;
  // -------------------------------------------
  const platform = Platform.OS
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
  function handleVerifyPhone() {
    
    const formData = new FormData();
    
      console.log('success')
      formData.append('full_name', fullName)
      formData.append('phone_number', phoneNumber,)
      formData.append('email_id', email)
      formData.append('password', password)
      formData.append('device_type', platform)
      formData.append('country', countryId)
      formData.append('state', stateId)
    if (parseInt(uotp) === otp) {
      if (!passwordPattern.test(password)) {
        Snackbar.show({
          text:JSON.stringify("Enter a valid password") ,
          duration:Snackbar.LENGTHSHORT
        })
      } else {
        if (password === matchPassword) {
          axios({
            method: 'post',
            url: REGISTER,
            timeout: 5000,
            data: formData,
            headers: {
              'Accept':"application/json",
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(response => {
              Snackbar.show({
                text:JSON.stringify(response.data.message) ,
                duration:Snackbar.LENGTHSHORT
              })
              navigation.navigate("SignIn")
            })
            .catch(error =>  {
              Snackbar.show({
                text:JSON.stringify(error.data.message) ,
                duration:Snackbar.LENGTHSHORT
              })
              navigation.navigate("SignIn")
            })
        
          }
        }
     
    } else {
      if (otp !== parseInt(uotp)) {
        Snackbar.show({
          text: "OTP does not match",
          duration:Snackbar.LENGTHSHORT
        })
      } else {
        Alert.alert("password does not match")
      }
    }
  }
  // -----------------------------------------


  

  // console.log(typeof uotp)



  // ------------------------------------------

  return (
    <Card
      title="Verify Phone"
      title1="Verify your"
      title2="phone"
      description={`We have send the verification to your phone number +r${phoneNumber}`}>
      <View
        style={{
          gap: 15,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: '7%',
        }}>
        <CustomTextInput
          placeholder="Enter OTP"
          keyboardType="number-pad"
          value={uotp}
          onChangeText={value => setUOtp(value)}></CustomTextInput>
        <CustomTextInput
          secureTextEntry={showPassword}
          onPress={() => setShowPassword(!showPassword)}
          placeholder="Create your password"
          icon="eye"
          value={password}
          onChangeText={value => setPassword(value)}></CustomTextInput>
        <CustomTextInput
          secureTextEntry={showNewPassword}
          onPress={() => setShowNewPassword(!showNewPassword)}
          placeholder="Re-enter your password"
          icon="eye"
          value={matchPassword}
          onChangeText={value => setMatchPassword(value)}></CustomTextInput>
        <CustomButton
          title="SIGN UP"
          style={{marginTop: 4}}
          onPress={handleVerifyPhone}></CustomButton>
      </View>
    </Card>
  );
}
