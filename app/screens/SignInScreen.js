import {Appearance,View,TouchableOpacity, Text, Pressable, StyleSheet, Platform,TextInput,Modal,ScrollView} from 'react-native';
import React, {useEffect, useState,useContext} from 'react';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import AsyncStorage from '@react-native-async-storage/async-storage';
// ----------custom imports----------------//
import Card from '../components/Card';
import ErrorText from '../components/ErrorText';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import getContries from '../utils/getContries';
import { validateInput } from '../utils/validators';
import useGenerateOtp from '../utils/useGenerateOtp';
import { userContext } from '../utils/userContext';
// ----------------------------------------//

export default function SignInScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [userId,setUserId]=useState(null)
  
  const [showPassword, setShowPassword] = useState(true);
  const [passwordError, setPasswordError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [countryCode, setCountryCode] = useState('91');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText,setSearchText]=useState('')
 const [filteredCountry,setFilteredCountry]=useState([])
  const {isLoggedIn,setIsLoggedIn} = useContext(userContext)
  // const [check, setCheck] = useState(true);
  // const [hide, setHide] = useState(false)
  const countryData = getContries()
  const [otp, setOtp] = useGenerateOtp();
const [phone,setPhone]=useState('')
  //---------------------

  // ----useEffects-----
  useEffect(() => {
    if (otp) {
      navigation.navigate('ResetPassword', {
        otp,
        phoneNumber,
      });
    }
  }, [otp]);

  useEffect(() => {
    setPhoneError(null);
    setPasswordError(null);
  }, [phoneNumber, password]);

  useEffect(() => {
    if (email && fullName && userId) {
      userInfo();
    }
  }, [email, fullName,userId]);
  
  // ___________________



  function handleSearchChange(value) {
    setSearchText(value)

    setFilteredCountry(countryData.filter((data) => data.name.toLowerCase().includes(searchText.toLowerCase())))

  }

  async function userInfo() {
    const userInfo = {
      email:email,
      fullName: fullName,
      userId:userId
    };
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log('User information stored successfully.')
    } catch (error) {
      console.log(error)
    }
  }

  
 

  function handleForgetPassword() {
    if (validateInput("Phone number",phoneNumber,setPhoneError)) {
      const formData = new FormData();
      formData.append('phone_number',phoneNumber);

      setOtp(formData)
    } else {
      Snackbar.show({
        text: 'Enter phone number',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }

  
  // ------
  function handleSignIn() {
   const validatePhone=validateInput("Phone number",phoneNumber,setPhoneError) 
      
    const validatePassword=validateInput("Password",password,setPasswordError)
   if (validatePhone && validatePassword){
      // userInfo()
      const formData = new FormData();
      formData.append('phone_number',phoneNumber);
      formData.append('password', password);
      formData.append('device_type', Platform.OS);
      axios({
        url: 'https://portal.crowdafrik.com/api/login',
        method: 'POST',
        data: formData,
        headers: {
          Accept: 'application/json',
          'content-type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log(response.data)
          setEmail(response.data.email_id)
          setFullName(response.data.full_name)
          setUserId(response.data.user_id)
         
         setIsLoggedIn(!isLoggedIn)
         
         
         
        })

        .catch(error => {
          const errorMsg = JSON.stringify(error.response?.data?.message)
          Snackbar.show({
            text: errorMsg?.slice(1,-1),
            duration: Snackbar.LENGTH_SHORT,
          });
        });
    }
  }

  return (
    <Card
      title="Sign In"
      title1="Welcome"
      title2="back to"
      description="CrowdAfrik"
      showBackBtn={true}
      style={{ marginTop: 20 }}
    // hide={hide}
    >
      
      <View
        style={{
          gap: 20,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: '7%',
        }}>
        <View style={styles.phonenumberContainer}>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}
            onPress={() => {
              // setHide(!hide);
              // setCheck(true);
              setModalVisible(!modalVisible);
              
              
              
              
            }}>
            <Text style={{fontSize: 13, color: 'black'}}>+{countryCode}</Text>
            <Icon name="chevron-down" color="black" size={20}></Icon>
          </Pressable>
          <TextInput
             value={phone}
            keyboardType="number-pad"
            style={{fontSize: 13, fontWeight: '400',color:"#525252"}}
            placeholder="Enter your phone number"
            placeholderTextColor="#7D7463"
            onChangeText={value => {
              setPhoneNumber(countryCode + value)
            setPhone(value)
            }
             
             
            }></TextInput>
        
          
        </View>
        {phoneError && <ErrorText>{phoneError}</ErrorText>}
        <CustomTextInput
          placeholder="Enter you password"
          value={password}
          icon="eye"
          secureTextEntry={showPassword}
          onPress={() => setShowPassword(!showPassword)}
          onChangeText={value => setPassword(value)}></CustomTextInput>
        {passwordError && <ErrorText>{passwordError}</ErrorText>}
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <View
            style={{width: '100%', alignItems: 'flex-end', marginBottom: 10}}>
            <Pressable
              style={{width: '30%', paddingVertical: '1%'}}
              onPress={handleForgetPassword}>
              <Text
                style={{textAlign: 'right', fontSize: 10, fontWeight: '400'}}>
                Forgot password?
              </Text>
            </Pressable>
          </View>
          <CustomButton title="SIGN IN" onPress={handleSignIn} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 12,
              color: '#4F4F4F',
              fontWeight: '400',
            }}>
            Don't have an account yet?
          </Text>
          <Pressable
            style={{marginLeft: 2}}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 12, color: '#FE2929', fontWeight: '400'}}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
   
      <Modal
     transparent={true}
     visible={modalVisible}
     animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible)
          // setHide(!hide)
         }}>
     <View
       style={{
         flex: 1,
            justifyContent: 'flex-end',
       }}>
       <View
         style={{
           backgroundColor: 'white',
           paddingHorizontal: 10,
           borderTopLeftRadius: 40,
           borderTopRightRadius: 40,
           height: '50%',
         }}>
         <CustomTextInput
           placeholder="search"
              style={{ marginVertical: 25 }}
              icon="magnify"
            onChangeText={handleSearchChange}
            ></CustomTextInput>
         <ScrollView>
           {(filteredCountry.length > 0 ? filteredCountry : countryData).map(data => (
             <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => {
                setCountryCode(data.mobile_code);
                setModalVisible(!modalVisible)
                // setHide(!hide)
               }}
               key={data.id}>
               <Text
                 style={{
                   padding: 10,
                   borderBottomWidth: 1,
                   borderColor: '#F1F1F1',
                   color:"#525252"
                  //  color:theme === "dark" ? "#525252" : "black"

                 }}>
                 {`(+${data.mobile_code}) ${data.name}`}
               </Text>
             </TouchableOpacity>
           ))}
         </ScrollView>
       </View>
     </View>
  </Modal>
    </Card>
  );
}

const styles = StyleSheet.create({
  pressable: {
    height: 44,
    // width: '50%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    fontWeight: '400',
    paddingHorizontal: '5%',
    color: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  phonenumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    height: 44,
    width: '100%',
    borderRadius: 10,

    fontWeight: '400',
    paddingHorizontal: 10,
    color: 'black',
  },
});
