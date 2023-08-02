// import {Pressable, Text} from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// export default function BackButton({onPress}) {
//   const navigation = useNavigation()
//   return (
//     <Pressable
//     onPress={onPress}
//       style={{
//         borderWidth: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 30,
//         height: 30,
//         marginLeft: 20,
//         borderRadius: 12,
//         borderColor: 'white',
//       }}>
//       <Icon name="chevron-left" color="white" size={ 15} ></Icon>
      
//     </Pressable>
//   );
// }
// import {View, Text, StyleSheet, Image,KeyboardAvoidingView,Platform} from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// import BackButton from '../components/BackButton';

// // -------------------------
// import Screen from './Screen';
// import CustomText from './CustomText';
// // -------------------------------
// export default function Card({ children, title='', title1='', title2='', description='',showBackBtn,style={},hide}) {
  
//   const navigation=useNavigation()
//   return (
//     <View style={{flex: 1,backgroundColor:"#2C2D2F"}}>
//       <Screen>
//         {!showBackBtn && <BackButton onpress={() => navigation.goBack()}></BackButton>}
//         <View style={{alignItems: 'center',width:"100%"}}>
//           <Image
//             resizeMode="cover"
//             style={[{height: 84, width: 161},style]}
//             source={require('../assets/CrowdAfrik.png')}></Image>
//         </View>
//         {/* Text */}
//         <View style={{marginLeft:35,marginTop:55,width:"100%"}}>
//           <CustomText title={title1}></CustomText>
//           <CustomText title={title2}></CustomText>
//           <Text style={{ color: "white", lineHeight: 16,width:"70%",marginTop:4 }}>{description }</Text>

//         </View>
//         {!hide && <KeyboardAvoidingView  style={styles.container}>
//           <View style={styles.view}>
//             <Text style={styles.text}>{title}</Text>
//           </View>
//           {children}
//         </KeyboardAvoidingView>}
//       </Screen>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     minHeight: 317,
//     width: '100%',
//     backgroundColor: 'white',
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     position: 'absolute',
//     bottom: 0,
//     paddingHorizontal:1,
//     paddingTop: 30,
//     paddingBottom:20,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: 'black',
//     alignSelf: 'flex-start',
//     marginBottom: 19,
//   },
//   view: {
//     width: "100%",paddingHorizontal:30
//   },
// });
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// export default function CustomButton({ title = 'Button', icon, style = {}, onPress = () => {} }) {
//   return (
//     <TouchableOpacity style={[styles.container,style]} activeOpacity={0.5} onPress={onPress}>
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>{title }</Text>
//         <Icon name={icon} style={styles.icon} />
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 49,
//     width: "100%",
//     backgroundColor: "#FE2929",
//     borderRadius: 30,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   contentContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   title: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: "800",
    
//     textAlign: "center", 
//     flex: 1, 
//   },
//   icon: {
//     color: '#fff',
//     fontSize: 20,
//       fontWeight: "800",
//     right:20
//   },
// });
// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'

// export default function CustomText({title='',style={}}) {
//   return (
    
//       <Text style={[styles.text,style]}>{title}</Text>
    
//   )
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 36,
//         fontWeight: "600",
//         color: "#FFFFFF",
//         // lineHeight:34
//     }
// })
// import {View, TextInput, StyleSheet} from 'react-native';
// import React,{useEffect,useRef} from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// export default function CustomTextInput({
//   onChangeText,
//   value,
//   secureTextEntry,
//   icon,
//   placeholder,
//   keyboardType,
//   onPress,
//   style
// }) {
//   return (
//     <View
//       style={[{
//         alignItems: 'center',
//         flexDirection: 'row',
//         height: 44,
//         // marginVertical:10,
      
        
//       },style]}>
//       <TextInput
//         secureTextEntry={secureTextEntry}
//         value={value}
        
//         style={[
//           styles.textInput,
        
//         ]}
//         keyboardType={keyboardType}
//         placeholder={placeholder}
//         placeholderTextColor="#7D7463"
//         onChangeText={onChangeText}></TextInput>
//       <Icon
//         style={{position: 'absolute', right: 10}}
//         name={icon}
//         size={18}
//         color="#CDCDCD"
//         onPress={onPress}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   textInput: {
//     height: 48,
//     width: "100%",
//     backgroundColor: '#F1F1F1',
//     borderRadius: 10,
//     fontSize: 13,
//     fontWeight: '400',
//     paddingHorizontal: 20,
//     color:"black"
//   },
// });
// import {View, Text, BackHandler} from 'react-native';
// import React, {useEffect, useState, useRef, useContext,useCallback} from 'react';
// import {WebView} from 'react-native-webview';
// import {MAIN_URL} from '../constants/api';
// import {userContext} from '../utils/userContext';
// import BackButton from '../components/BackButton';
// import CustomText from '../components/CustomText';
// import Screen from '../components/Screen';
// export default function HomeScreen({navigation}) {
//   const {userId,tempUserId} = useContext(userContext);
//   const [canGoBack, setCanGoBack] = useState(false);
//   const [title, setTitle] = useState('');
//   const webviewRef = useRef(null);

//   const url = userId ? `${MAIN_URL}member/home/${userId}` : `${MAIN_URL}member/home/${tempUserId}` ;
 





//   const onAndroidBackPress = useCallback(() => {
//     if (webviewRef.current && canGoBack) {
//       webviewRef.current.goBack();
      
      
//         return true; 
//     }

//     return false;
// }, [canGoBack]);

//   useEffect(() => {
//     BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

//     console.log(title)
//     return () => {
//         BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
//     };
// }, [onAndroidBackPress]);


//   return (
//     <Screen>
//     {canGoBack && title !== "Home" && title !== "search.hide" && <View style={{ height: "10%", backgroundColor: "#FE2929", alignItems: "center", flexDirection: "row",gap:25 }}>
        
//         <BackButton onPress={onAndroidBackPress}></BackButton>
//         <CustomText style={{fontSize:20,fontWeight:500}} title={title ? title : '...'}></CustomText>
//       </View>}
//       {url && <WebView
//         ref={webviewRef}

//         injectedJavaScriptForMainFrameOnly={false}
//   injectedJavaScript={`(function() {
//     window.ReactNativeWebView.postMessage(document.title);
//     true; 
//   })();`}
//   onMessage={(event) => setTitle(event.nativeEvent.data)}
//         onNavigationStateChange={navState => {
         
//           if (!navState.loading) {
//             setCanGoBack(navState.canGoBack);
//             //   setTitle(navState.title)
//             // } else {
//             //   setTitle('...')
//           }
         
//         }}
//         source={{ uri: url }}
//       />}
//     </Screen>
//   );
// }
// import { View, Text,BackHandler } from 'react-native'
// import React,{useContext,useEffect,useCallback,useState,useRef} from 'react'
// import { WebView } from "react-native-webview"
// import { userContext } from '../utils/userContext';
// import { MAIN_URL } from '../constants/api';
// import Screen from '../components/Screen';
// export default function Profile() {
//     const {userId,tempUserId} = useContext(userContext)
//     const url = userId ? `${MAIN_URL}member/notifications/${userId}` : `${MAIN_URL}member/notifications/${tempUserId}` ;
//     const [canGoBack, setCanGoBack] = useState(false);
//     const webviewRef = useRef(null);

//     const onAndroidBackPress = useCallback(() => {
//         if (webviewRef.current && canGoBack) {
//             webviewRef.current.goBack();
//             return true; 
//         }

//         return true;
//     }, [canGoBack]);

//     useEffect(() => {
//         BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

       
//         return () => {
//             BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
//         };
//     }, [onAndroidBackPress]);


//   return (
//     <Screen>
//       <WebView  ref={webviewRef}
        
//         onNavigationStateChange={navState => {
//           setCanGoBack(navState.canGoBack);
//         }} source={{ uri: url }} />
//     </Screen>
//   )
// }
// import { View, Text, BackHandler } from 'react-native';
// import React, { useContext, useRef, useEffect, useState, useCallback } from 'react';
// import { WebView } from "react-native-webview";
// import { userContext } from '../utils/userContext';
// import { MAIN_URL } from '../constants/api';
// import BackButton from '../components/BackButton';
// import CustomText from '../components/CustomText';
// import Screen from '../components/Screen';
// export default function Profile() {
//     const [canGoBack, setCanGoBack] = useState(false);
//     const webviewRef = useRef(null);
//     const { userId ,tempUserId} = useContext(userContext);

//   const url = userId ? `${MAIN_URL}member/profile/${userId}` : `${MAIN_URL}member/profile/${tempUserId}` ;
  
//     const [title, setTitle] = useState('');


//     const onAndroidBackPress = useCallback(() => {
//         if (webviewRef.current && canGoBack) {
//             webviewRef.current.goBack();
//             return true; 
//         }

//         return true;
//     }, [canGoBack]);

//     useEffect(() => {
//         BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

       
//         return () => {
//             BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
//         };
//     }, [onAndroidBackPress]);
// console.log(title)
//     return (
//         <Screen>
//             {canGoBack &&  <View style={{ height: "10%", backgroundColor: "#FE2929", alignItems: "center", flexDirection: "row",gap:25 }}>
        
//         <BackButton onPress={onAndroidBackPress}></BackButton>
//         <CustomText style={{fontSize:15,fontWeight:400}} title={title}></CustomText>
//       </View>}
//             <WebView 
//                 ref={webviewRef}

//         injectedJavaScriptForMainFrameOnly={false}
//         injectedJavaScript={`(function() {
//           window.ReactNativeWebView.postMessage(document.title);
//           true; 
//         })();`}
//         onMessage={(event) => setTitle(event.nativeEvent.data)}
//                 onNavigationStateChange={(navState) => {
//                     setCanGoBack(navState.canGoBack);
//                     console.log(navState)
                    
                    
                
//                 }}
//                 source={{ uri: url }} 
//             />
//         </Screen>
//     );
// }
// import {View, Text, Pressable, StyleSheet,} from 'react-native';
// import React, { useState,useEffect } from 'react';
// import axios from "axios"
// // import AsyncStorage from "@react-native-async-storage/async-storage"
// import Snackbar from 'react-native-snackbar';
// // ----------------------custom import
// import Card from '../components/Card';
// import CustomTextInput from '../components/CustomTextInput';
// import CustomButton from '../components/CustomButton';
// import { RESET_PASSWORD } from '../constants/api';
// import ErrorText from '../components/ErrorText';
// // ---------------------
// export default function ResetPasswordScreen({navigation,route}) {
//   const [newPassword, setNewPassword] = useState('');
//   const [matchPassword, setMatchPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(true);
//   const [showNewPassword, setShowNewPassword] = useState(true);
//   const [resetOtp, setResetOtp] = useState('');
//   // const [phoneNumber, setPhoneNumber] = useState('')
//   const [email, setEmail] = useState('')
//   const [error,setError]=useState('')
//   const {otp,phoneNumber}= route.params
// // ----------------------
 

// useEffect(()=>{
// setError('')
// },[newPassword])




//   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const formData=new FormData()
// formData.append("phone_number",phoneNumber)
// formData.append("password",newPassword)

//   function handleResetPassword() {

//     if (otp === parseInt(resetOtp)) {
      
//       if (!passwordPattern.test(newPassword)) {
//       setError("Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.")
    
//     }else if (newPassword !== matchPassword) {
//         setError("Password does not match")
//     }
    
//     else{
//       axios({
//         method:"post",
//         url:RESET_PASSWORD,
//         data:formData,
//         headers:{
//           Accept:"application/json",
//           "content-type":"multipart/form-data"
//         }
//       }).then(response=>{
//         if(response.data.status_code === "01"){
//           Snackbar.show({
//             text: "Password changed succesfully",
//             duration:Snackbar.LENGTHSHORT
//           })
//           setTimeout(()=>{
//             navigation.navigate("SignIn")
//           },2000)
          
          
//         }
//       })
//       .catch(error=>console.log(error.data))
//     }

    
//     } else{
//       Snackbar.show({
//         text: "Otp does not match",
//         duration: Snackbar.LENGTH_SHORT,
        
//       })
//       return 
//   }
//   }



















//   // ---------------------
//   console.log(otp)
// // ----------------------

//   return (
//     <Card
//       title="Reset Password"
//       title1="Reset your"
//       title2="password"
//       description={`We have send the verification to your mobile number  +${phoneNumber} `}>
//       <View
//         style={{
//           gap: 15,
//           width: '100%',
//           alignItems: 'center',
//           paddingHorizontal: '7%',
//         }}>
//         <View
//           style={{
//             height: 48,
//             borderRadius: 10,
//             position: 'relative',
//             justifyContent: 'center',
//           }}>
//           <CustomTextInput
//             keyboardType="number-pad"
//             placeholder="Enter OTP"
//             value={resetOtp}
//             onChangeText={(value) => setResetOtp(value)}></CustomTextInput>
        
//         </View>
//         <CustomTextInput
//           secureTextEntry={showPassword}
//           onPress={() => setShowPassword(!showPassword)}
//           placeholder="Create your password"
//           icon="eye"
//           value={newPassword}
//           onChangeText={value => setNewPassword(value)}></CustomTextInput>
//         {error && <ErrorText>{error}</ErrorText>}
//         <CustomTextInput
//           secureTextEntry={showNewPassword}
//           onPress={() => setShowNewPassword(!showNewPassword)}
//           placeholder="Re-enter your password"
//           icon="eye"
//           value={matchPassword}
//           onChangeText={value => setMatchPassword(value)}></CustomTextInput>
//         <CustomButton title="RESET" style={{marginTop: 4}} onPress={handleResetPassword} ></CustomButton>
//       </View>
//     </Card>
//   );
// }

// const styles = StyleSheet.create({
 
// });
// import {Appearance,View,TouchableOpacity, Text, Pressable, StyleSheet, Platform,TextInput,Modal,ScrollView} from 'react-native';
// import React, {useEffect, useState,useContext} from 'react';
// import axios from 'axios';
// import Snackbar from 'react-native-snackbar';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// import AsyncStorage from '@react-native-async-storage/async-storage';
// // ----------custom imports----------------//
// import Card from '../components/Card';
// import ErrorText from '../components/ErrorText';
// import CustomTextInput from '../components/CustomTextInput';
// import CustomButton from '../components/CustomButton';
// import getContries from '../utils/getContries';
// import { validateInput } from '../utils/validators';
// import useGenerateOtp from '../utils/useGenerateOtp';
// import { userContext } from '../utils/userContext';
// // ----------------------------------------//

// export default function SignInScreen({navigation}) {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('')
//   const [fullName, setFullName] = useState('')
//   const [userId,setUserId]=useState(null)
  
//   const [showPassword, setShowPassword] = useState(true);
//   const [passwordError, setPasswordError] = useState(null);
//   const [phoneError, setPhoneError] = useState(null);
//   const [countryCode, setCountryCode] = useState('91');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [searchText,setSearchText]=useState('')
//  const [filteredCountry,setFilteredCountry]=useState([])
//   const {isLoggedIn,setIsLoggedIn,setTempUserId,tempUserId} = useContext(userContext)
//   // const [check, setCheck] = useState(true);
//   // const [hide, setHide] = useState(false)
//   const countryData = getContries()
//   const [otp, setOtp] = useGenerateOtp();
// const [phone,setPhone]=useState('')
//   //---------------------

//   // ----useEffects-----
//   useEffect(() => {
//     if (otp) {
//       navigation.navigate('ResetPassword', {
//         otp,
//         phoneNumber,
//       });
//     }
//   }, [otp]);

//   useEffect(() => {
//     setPhoneError(null);
//     setPasswordError(null);
//   }, [phoneNumber, password]);

//   useEffect(() => {
//     if (email && fullName && userId) {
//       userInfo();
//     }
//   }, [email, fullName,userId]);
  
//   // ___________________



//   function handleSearchChange(value) {
//     setSearchText(value)

//     setFilteredCountry(countryData.filter((data) => data.name.toLowerCase().includes(searchText.toLowerCase())))

//   }

//   async function userInfo() {
//     const userInfo = {
//       email:email,
//       fullName: fullName,
//       userId:userId
//     };
//     try {
//       await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//       console.log('User information stored successfully.')
//     } catch (error) {
//       console.log(error)
//     }
//   }

  
 

//   function handleForgetPassword() {
//     if (validateInput("Phone number",phoneNumber,setPhoneError)) {
//       const formData = new FormData();
//       formData.append('phone_number',phoneNumber);

//       setOtp(formData)
//     } else {
//       Snackbar.show({
//         text: 'Enter phone number',
//         duration: Snackbar.LENGTH_SHORT,
//       });
//     }
//   }

  
//   // ------
//   function handleSignIn() {
//    const validatePhone=validateInput("Phone number",phoneNumber,setPhoneError) 
      
//     const validatePassword=validateInput("Password",password,setPasswordError)
//    if (validatePhone && validatePassword){
//       // userInfo()
//       const formData = new FormData();
//       formData.append('phone_number',phoneNumber);
//       formData.append('password', password);
//       formData.append('device_type', Platform.OS);
//       axios({
//         url: 'https://portal.crowdafrik.com/api/login',
//         method: 'POST',
//         data: formData,
//         headers: {
//           Accept: 'application/json',
//           'content-type': 'multipart/form-data',
//         },
//       })
//         .then(response => {
//           console.log(response.data)
//           setEmail(response.data?.email_id)
//           setFullName(response.data?.full_name)
//           setUserId(response.data?.user_id)
//          setTempUserId(response.data?.user_id)
//          setIsLoggedIn(!isLoggedIn)
         
         
         
//         })

//         .catch(error => {
//           const errorMsg = JSON.stringify(error.response?.data?.message)
//           Snackbar.show({
//             text: errorMsg?.slice(1,-1),
//             duration: Snackbar.LENGTH_SHORT,
//           });
//         });
//     }
//   }
//   console.log("userId", typeof userId)
//   console.log( userId)
//   console.log("tempUserid" ,typeof tempUserId)
//   console.log( userId)



//   return (
//     <Card
//       title="Sign In"
//       title1="Welcome"
//       title2="back to"
//       description="CrowdAfrik"
//       showBackBtn={true}
//       style={{ marginTop: 20 }}
//     // hide={hide}
//     >
      
//       <View
//         style={{
//           gap: 20,
//           width: '100%',
//           alignItems: 'center',
//           paddingHorizontal: '7%',
//         }}>
//         <View style={styles.phonenumberContainer}>
//           <Pressable
//             style={{flexDirection: 'row', alignItems: 'center', gap: 4}}
//             onPress={() => {
//               // setHide(!hide);
//               // setCheck(true);
//               setModalVisible(!modalVisible);
              
              
              
              
//             }}>
//             <Text style={{fontSize: 13, color: 'black'}}>+{countryCode}</Text>
//             <Icon name="chevron-down" color="black" size={20}></Icon>
//           </Pressable>
//           <TextInput
//              value={phone}
//             keyboardType="number-pad"
//             style={{fontSize: 13, fontWeight: '400',color:"#525252"}}
//             placeholder="Enter your phone number"
//             placeholderTextColor="#7D7463"
//             onChangeText={value => {
//               setPhoneNumber(countryCode + value)
//             setPhone(value)
//             }
             
             
//             }></TextInput>
        
          
//         </View>
//         {phoneError && <ErrorText>{phoneError}</ErrorText>}
//         <CustomTextInput
//           placeholder="Enter you password"
//           value={password}
//           icon="eye"
//           secureTextEntry={showPassword}
//           onPress={() => setShowPassword(!showPassword)}
//           onChangeText={value => setPassword(value)}></CustomTextInput>
//         {passwordError && <ErrorText>{passwordError}</ErrorText>}
//         <View style={{width: '100%', alignItems: 'flex-end'}}>
//           <View
//             style={{width: '100%', alignItems: 'flex-end', marginBottom: 10}}>
//             <Pressable
//               style={{width: '30%', paddingVertical: '1%'}}
//               onPress={handleForgetPassword}>
//               <Text
//                 style={{textAlign: 'right', fontSize: 10, fontWeight: '400'}}>
//                 Forgot password?
//               </Text>
//             </Pressable>
//           </View>
//           <CustomButton title="SIGN IN" onPress={handleSignIn} />
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Text
//             style={{
//               fontSize: 12,
//               color: '#4F4F4F',
//               fontWeight: '400',
//             }}>
//             Don't have an account yet?
//           </Text>
//           <Pressable
//             style={{marginLeft: 2}}
//             onPress={() => navigation.navigate('SignUp')}>
//             <Text style={{fontSize: 12, color: '#FE2929', fontWeight: '400'}}>
//               Sign Up
//             </Text>
//           </Pressable>
//         </View>
//       </View>
   
//       <Modal
//      transparent={true}
//      visible={modalVisible}
//      animationType="slide"
//         onRequestClose={() => {
//           setModalVisible(!modalVisible)
//           // setHide(!hide)
//          }}>
//      <View
//        style={{
//          flex: 1,
//             justifyContent: 'flex-end',
//        }}>
//        <View
//          style={{
//            backgroundColor: 'white',
//            paddingHorizontal: 10,
//            borderTopLeftRadius: 40,
//            borderTopRightRadius: 40,
//            height: '50%',
//          }}>
//          <CustomTextInput
//            placeholder="search"
//               style={{ marginVertical: 25 }}
//               icon="magnify"
//             onChangeText={handleSearchChange}
//             ></CustomTextInput>
//          <ScrollView>
//            {(filteredCountry.length > 0 ? filteredCountry : countryData).map(data => (
//              <TouchableOpacity
//                activeOpacity={0.8}
//                onPress={() => {
//                 setCountryCode(data.mobile_code);
//                 setModalVisible(!modalVisible)
//                 // setHide(!hide)
//                }}
//                key={data.id}>
//                <Text
//                  style={{
//                    padding: 10,
//                    borderBottomWidth: 1,
//                    borderColor: '#F1F1F1',
//                    color:"#525252"
//                   //  color:theme === "dark" ? "#525252" : "black"

//                  }}>
//                  {`(+${data.mobile_code}) ${data.name}`}
//                </Text>
//              </TouchableOpacity>
//            ))}
//          </ScrollView>
//        </View>
//      </View>
//   </Modal>
//     </Card>
//   );
// }

// const styles = StyleSheet.create({
//   pressable: {
//     height: 44,
//     // width: '50%',
//     backgroundColor: '#F1F1F1',
//     borderRadius: 10,
//     fontWeight: '400',
//     paddingHorizontal: '5%',
//     color: 'black',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flex: 1,
//   },
//   phonenumberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F1F1F1',
//     height: 44,
//     width: '100%',
//     borderRadius: 10,

//     fontWeight: '400',
//     paddingHorizontal: 10,
//     color: 'black',
//   },
// });
// import {
//     View,
//     Text,
//     Pressable,
//     TextInput,
//     Modal,
//     ScrollView,
//     TouchableOpacity,
//     StyleSheet,
//     Appearance,
//   } from 'react-native';
//   import React, {useState, useEffect} from 'react';
//   import axios from 'axios';
//   import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//   // import AsyncStorage from '@react-native-async-storage/async-storage';
//   import Snackbar from 'react-native-snackbar';
//   // -------------custom import
//   import Card from '../components/Card';
//   import CustomTextInput from '../components/CustomTextInput';
//   import CustomButton from '../components/CustomButton';
//   import ErrorText from '../components/ErrorText';
//   import {CHECK, GET_STATES} from '../constants/api';
//   import getContries from '../utils/getContries';
//   import {validateEmail, validateInput} from '../utils/validators';
//   // ------------------------
//   export default function SignUpScreen({navigation}) {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     // ----------------------------------------------
//     const [statesData, setStatesData] = useState([]);
//     // ---------------------------------------------------
//     const [countryCode, setCountryCode] = useState('234');
//     const [countryName, setCountryName] = useState('Country');
//     const [state, setState] = useState(' State');
//     const [stateId, setStateId] = useState('');
//     const [countryId, setCountryId] = useState(null);
//     const [filteredCountry, setFilteredCountry] = useState([]);
//     const [searchText, setSearchText] = useState('');
  
//     // -----------------------------
//     const [fullNameError, setFullNameError] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [phoneNumberError, setPhoneNumberError] = useState('');
//     const [countryError, setCountryError] = useState('');
//     const countryData = getContries();
//     const [stateError, setStateError] = useState('');
//     const [otp, setOtp] = useState(null);
//     // -------------
//     const [modalVisible, setModalVisible] = useState(false);
//     const [stateModal, setStateModal] = useState(false);
//     const [check, setCheck] = useState(true);
//     const [hide, setHide] = useState(false);
//     const theme = Appearance.getColorScheme();
//     const [phone,setPhone]=useState('')
//     const [emptyData, setEmptyData] = useState('');
//     //---------------------
//     // getting states
//     useEffect(() => {
//       axios
//         .get(GET_STATES + countryId)
//         .then(response => setStatesData(response.data?.states))
  
//         .catch(error => console.log(error));
//     }, [countryId]);
//     useEffect(() => {
//       if (otp) {
//         navigation.navigate('VerifyNumber', {
//           fullName,
//           email,
//           phoneNumber,
//           countryId,
//           stateId,
//           otp: otp,
//         });
//       }
//     }, [otp]);
//   console.log(otp)
//     // ----------------
  
//     useEffect(() => {
//       setFullNameError('');
//       setEmailError('');
//       setPhoneNumberError('');
//     }, [fullName, email, phoneNumber]);
//     // ---------------------------------
//     // --------------------------------
//     // Validation rules
  
//     function handleSearchChange(value) {
//       setSearchText(value);
  
//       setFilteredCountry(
//         countryData.filter(data =>
//           data.name.toLowerCase().includes(searchText.toLowerCase()),
//         ),
//       );
//     }
  
//     // -------------------------------------------
//     let formData = new FormData();
//     formData.append('phone_number', phoneNumber);
//     formData.append('email_id', email);
  
//     const handleSignUp = () => {
//       const isFullNameValid = validateInput(
//         'Full name',
//         fullName,
//         setFullNameError,
//       );
//       const isEmailValid = validateEmail(email, setEmailError);
//       const isPhoneNumberValid = validateInput(
//         'Phone number',
//         phoneNumber,
//         setPhoneNumberError,
//       );
//       const isCountryValid = validateInput(
//         'Country',
//         countryName,
//         setCountryError,
//       );
//       const isStateValid = validateInput('State', state, setStateError);
  
//       if (
//         isFullNameValid &&
//         isEmailValid &&
//         isPhoneNumberValid &&
//         isCountryValid &&
//         isStateValid
//       ) {
//         axios({
//           method: 'post',
//           url: CHECK,
//           timeout: 5000,
//           data: formData,
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'multipart/form-data',
//           },
//         })
//           .then(response => {
//             setOtp(response.data.otp);
//             setTimeout(() => {
//               Snackbar.show({
//                 text: 'OTP sent succesfully',
//                 duration: Snackbar.LENGTH_SHORT,
//               });
//             }, 2000);
//           })
//           .catch(error => {
//             const errormsg = JSON.stringify(error?.response?.data?.message);
//             Snackbar.show({
//               text: errormsg.slice(1, -1),
//               duration: Snackbar.LENGTH_SHORT,
//             });
//           });
//       } else {
//         Snackbar.show({
//           text: 'All fields are required',
//           duration: Snackbar.LENGTH_SHORT,
//         });
//       }
//     };
  
//     return (
//       <>
//         <Card
//           title="Sign Up"
//           title1="Create better"
//           title2="together"
//           description="Join our community"
//           hide={hide}>
//           {!modalVisible && !stateModal && (
//             <View
//               style={{
//                 gap: 20,
//                 width: '100%',
//                 alignItems: 'center',
//                 paddingHorizontal: '7%',
//               }}>
//               <CustomTextInput
//                 placeholder="Enter your full name"
//                 value={fullName}
//                 onChangeText={value => setFullName(value)}></CustomTextInput>
//               {fullNameError && <ErrorText>{fullNameError}</ErrorText>}
//               <CustomTextInput
//                 placeholder="Enter your email id"
//                 value={email}
//                 onChangeText={value => setEmail(value)}></CustomTextInput>
//               {emailError && <ErrorText>{emailError}</ErrorText>}
//               {/* ----------- */}
//               <View style={styles.phonenumberContainer}>
//                 <Pressable
//                   style={{flexDirection: 'row', alignItems: 'center', gap: 4}}
//                   onPress={() => {
//                     setModalVisible(!modalVisible);
//                     setCheck(true);
//                     setHide(!hide);
//                   }}>
//                   <Text style={{fontSize: 13, color: 'black'}}>
//                     +{countryCode}
//                   </Text>
//                   <Icon name="chevron-down" color="black" size={20}></Icon>
//                 </Pressable>
//                 <TextInput
//                   value={phone}
//                   keyboardType="number-pad"
//                   style={{fontSize: 13, fontWeight: '400'}}
//                   placeholder="Enter your phone number"
//                   placeholderTextColor="#7D7463"
//                   onChangeText={value =>{
//                     setPhoneNumber(countryCode + value)
//                     setPhone(value)
//                   }
                    
//                   }></TextInput>
//               </View>
  
//               {phoneNumberError && <ErrorText>{phoneNumberError}</ErrorText>}
  
//               <View style={{flexDirection: 'row', gap: 10}}>
//                 <Pressable
//                   style={[styles.pressable]}
//                   onPress={() => {
//                     setModalVisible(!modalVisible);
//                     setCheck(false);
//                     setHide(!hide);
//                   }}>
//                   <Text style={{fontSize: 13, color: '#525252'}}>
//                     {countryName}
//                   </Text>
//                   <Icon name="chevron-down" color="#525252" size={20}></Icon>
//                 </Pressable>
  
//                 <Pressable
//                   style={[styles.pressable]}
//                   onPress={() => {
//                     setStateModal(!stateModal);
//                     setHide(!hide);
//                   }}>
//                   <Text style={{fontSize: 13, color: '#525252'}}>{state}</Text>
//                   <Icon name="chevron-down" color="#525252" size={20}></Icon>
//                 </Pressable>
//               </View>
  
//               <CustomButton
//                 title="CONTINUE"
//                 icon="arrow-right"
//                 onPress={handleSignUp}></CustomButton>
  
//               <View style={{flexDirection: 'row'}}>
//                 <Text
//                   style={{
//                     fontSize: 12,
//                     color: '#4F4F4F',
//                     fontWeight: '400',
//                   }}>
//                   Already a member?
//                 </Text>
//                 <Pressable
//                   style={{marginLeft: 2}}
//                   onPress={() => navigation.navigate('SignIn')}>
//                   <Text style={{fontSize: 12, color: 'red', fontWeight: '400'}}>
//                     Sign In
//                   </Text>
//                 </Pressable>
//               </View>
//             </View>
//           )}
//         </Card>
//         <Modal
//           transparent={true}
//           visible={modalVisible}
//           animationType="slide"
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//             setHide(!hide);
//           }}>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'flex-end',
//             }}>
//             <View
//               style={{
//                 backgroundColor: 'white',
//                 height: '50%',
//                 paddingHorizontal: 10,
//                 borderTopLeftRadius: 40,
//                 borderTopRightRadius: 40,
//               }}>
//               <CustomTextInput
//                 placeholder="search"
//                 style={{marginVertical: 25}}
//                 onChangeText={handleSearchChange}></CustomTextInput>
//               <ScrollView>
//                 {(filteredCountry.length !== 0
//                   ? filteredCountry
//                   : countryData
//                 ).map(data => (
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={() => {
//                       setCountryCode(data.mobile_code);
//                       setCountryId(data.id);
//                       setCountryName(data.name);
//                       setModalVisible(!modalVisible);
//                       setHide(!hide);
//                     }}
//                     key={data.id}>
//                     <Text
//                       style={{
//                         padding: 10,
//                         borderBottomWidth: 1,
//                         borderColor: '#F1F1F1',
//                         color: '#525252',
//                       }}>
//                       {check && `(+${data.mobile_code}) ${data.name} `}
//                       {!check && ` ${data.name} `}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>
  
//         <Modal
//           transparent={true}
//           visible={stateModal}
//           animationType="slide"
//           onRequestClose={() => {
//             setStateModal(!stateModal);
//             setHide(!hide);
//           }}>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'flex-end',
//             }}>
//             <View
//               style={{
//                 backgroundColor: 'white',
//                 paddingHorizontal: 10,
//                 borderTopLeftRadius: 40,
//                 borderTopRightRadius: 40,
//                 height: '50%',
//               }}>
//               <View>
//                 <CustomTextInput
//                   placeholder="Search"
//                   style={{marginVertical: 25}}></CustomTextInput>
//               </View>
//               {statesData.length === 0 && <Text style={{color:"#525252",paddingLeft:10}}>No states available</Text>}
              
//               <ScrollView>
//                 {statesData?.map(data => (
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={() => {
//                       setStateId(data.id);
//                       setState(data.name);
  
//                       setStateModal(!stateModal);
//                       setHide(!hide);
//                     }}
//                     key={data.id}>
//                     <Text
//                       style={{
//                         padding: 10,
//                         borderBottomWidth: 1,
//                         borderColor: '#F1F1F1',
//                         color: '#525252',
  
//                         //  color:theme === "dark" ? "#525252" : "black"
//                       }}>
//                       {data.name}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>
//       </>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     pressable: {
//       height: 44,
//       // width: '50%',
//       backgroundColor: '#F1F1F1',
//       borderRadius: 10,
//       fontWeight: '400',
//       paddingHorizontal: '5%',
//       color: 'black',
//       alignItems: 'center',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       flex: 1,
//     },
//     phonenumberContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: '#F1F1F1',
//       height: 44,
//       width: '100%',
//       borderRadius: 10,
  
//       fontWeight: '400',
//       paddingHorizontal: 10,
//       color: 'black',
//     },
//   });
//   import {View, Text,Alert,Platform} from 'react-native';
// import React, {useState} from 'react';
// import axios from 'axios';
// import Snackbar from 'react-native-snackbar';
// // ------------Custom import
// import Card from '../components/Card';
// import CustomTextInput from '../components/CustomTextInput';
// import CustomButton from '../components/CustomButton';
// import {REGISTER} from '../constants/api';
// // ---------------------------
// export default function VerifyPhone({route,navigation}) {
//   const [uotp, setUOtp] = useState(null);
//   const [password, setPassword] = useState('');
//   const [matchPassword, setMatchPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(true);
//   const [showNewPassword, setShowNewPassword] = useState(true);
//   const { fullName, email, phoneNumber, stateId, countryId,otp } = route.params;
//   // -------------------------------------------
//   const platform = Platform.OS
//   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
//   function handleVerifyPhone() {
    
//     const formData = new FormData();
    
//       console.log('success')
//       formData.append('full_name', fullName)
//       formData.append('phone_number', phoneNumber,)
//       formData.append('email_id', email)
//       formData.append('password', password)
//       formData.append('device_type', platform)
//       formData.append('country', countryId)
//       formData.append('state', stateId)
//     if (parseInt(uotp) === otp) {
//       if (!passwordPattern.test(password)) {
//         Snackbar.show({
//           text:JSON.stringify("Enter a valid password") ,
//           duration:Snackbar.LENGTHSHORT
//         })
//       } else {
//         if (password === matchPassword) {
//           axios({
//             method: 'post',
//             url: REGISTER,
//             timeout: 5000,
//             data: formData,
//             headers: {
//               'Accept':"application/json",
//               'Content-Type': 'multipart/form-data',
//             },
//           })
//             .then(response => {
//               Snackbar.show({
//                 text:JSON.stringify(response.data.message) ,
//                 duration:Snackbar.LENGTHSHORT
//               })
//               navigation.navigate("SignIn")
//             })
//             .catch(error =>  {
//               Snackbar.show({
//                 text:JSON.stringify(error.data.message) ,
//                 duration:Snackbar.LENGTHSHORT
//               })
//               navigation.navigate("SignIn")
//             })
        
//           }
//         }
     
//     } else {
//       if (otp !== parseInt(uotp)) {
//         Snackbar.show({
//           text: "OTP does not match",
//           duration:Snackbar.LENGTHSHORT
//         })
//       } else {
//         Alert.alert("password does not match")
//       }
//     }
//   }
//   // -----------------------------------------


  

//   // console.log(typeof uotp)



//   // ------------------------------------------

//   return (
//     <Card
//       title="Verify Phone"
//       title1="Verify your"
//       title2="phone"
//       description={`We have send the verification to your phone number +r${phoneNumber}`}>
//       <View
//         style={{
//           gap: 15,
//           width: '100%',
//           alignItems: 'center',
//           paddingHorizontal: '7%',
//         }}>
//         <CustomTextInput
//           placeholder="Enter OTP"
//           keyboardType="number-pad"
//           value={uotp}
//           onChangeText={value => setUOtp(value)}></CustomTextInput>
//         <CustomTextInput
//           secureTextEntry={showPassword}
//           onPress={() => setShowPassword(!showPassword)}
//           placeholder="Create your password"
//           icon="eye"
//           value={password}
//           onChangeText={value => setPassword(value)}></CustomTextInput>
//         <CustomTextInput
//           secureTextEntry={showNewPassword}
//           onPress={() => setShowNewPassword(!showNewPassword)}
//           placeholder="Re-enter your password"
//           icon="eye"
//           value={matchPassword}
//           onChangeText={value => setMatchPassword(value)}></CustomTextInput>
//         <CustomButton
//           title="SIGN UP"
//           style={{marginTop: 4}}
//           onPress={handleVerifyPhone}></CustomButton>
//       </View>
//     </Card>
//   );
// }
// import {View, Text, ImageBackground, Dimensions,StyleSheet} from 'react-native';
// import React from 'react';
// // ------------------custom import
// import Card from '../components/Card';
// import CustomButton from '../components/CustomButton';
// // -------------------------

// const {width, height} = Dimensions.get('window');

// export default function LoginScreen({navigation}) {
//   return (
//     <View style={{flex: 1}}>
//       <ImageBackground
//         style={{height: '85%'}}
//         source={require('../assets/welcomeImage.jpg')}
//         resizeMode="cover"
//       />
//       <View style={styles.container}>
//         <Text style={styles.title}>Welcome to</Text>
//         <View style={styles.descContainer}>
//         <Text style={styles.description}>
//           CrowdAfrik is a Financial technology (fintech) initiative with a broad
//           range of ideas that aim to provide support, finances and deploy
//           technical exchanges to Africans with the main goal of poverty
//           reduction, industrial development and creating job opportunities.
//           </Text>
//           </View>
//         <CustomButton title="Get Started" icon="arrow-right" onPress={()=>navigation.navigate("SignIn")}></CustomButton>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 23,
//     fontWeight: "700",
//     color:"#1E233B"
//   },
//   description: {
//     fontSize: 14,
//     fontWeight: "400",
//     color:"#1E233B"
//   },
//   container: {
//     alignItems: "center",
//     justifyContent:"center",
//     position: "absolute",
//     bottom: 0,
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     backgroundColor: "white",
//     width: "100%",
//     height:"37%",
//     gap: 30,
//     paddingHorizontal: "7%",
//     paddingVertical:"10%"
//   },
//   descContainer: {
//     paddingHorizontal: "5%",
    
    
//   }
// })
