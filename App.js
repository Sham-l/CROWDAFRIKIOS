import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
// --------custom import-------------
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import VerifyPhone from './app/screens/VerifyPhoneScreen';
import ResetPasswordScreen from './app/screens/ResetPasswordScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SplashScreen from './app/screens/SplashScreen';
import HomeScreen from './app/screens/HomeScreen';
import {UserProvider} from './app/utils/userContext';
import Profile from './app/screens/Profile';
import NotificationScreen from './app/screens/NotificationScreen';
// --------------------------------------------------
const AuthStack = createNativeStackNavigator();
const MainStack = createBottomTabNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="WelcomeScreen">
      {/* <AuthStack.Screen name="SplashScreen" component={SplashScreen}></AuthStack.Screen> */}
      <AuthStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}></AuthStack.Screen>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}></AuthStack.Screen>
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}></AuthStack.Screen>
      <AuthStack.Screen
        name="VerifyNumber"
        component={VerifyPhone}></AuthStack.Screen>
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          height: '10%',
        },
      }}>
      <MainStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                height: size * 1.5,
                width: size * 1.5,
                backgroundColor: focused ? '#FE2929' : 'white',
                borderRadius: size * 1.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="bell-outline"
                color={focused ? 'white' : 'black'}
                size={size}
              />
            </View>
          ),
        }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                height: size * 1.5,
                width: size * 1.5,
                backgroundColor: focused ? '#FE2929' : 'white',
                borderRadius: size * 1.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="home-outline"
                color={focused ? 'white' : 'black'}
                size={size}
              />
            </View>
          ),
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, focused}) => (
            <View
              style={{
                height: size * 1.5,
                width: size * 1.5,
                backgroundColor: focused ? '#FE2929' : 'white',
                borderRadius: size * 1.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="account-outline"
                color={focused ? 'white' : 'black'}
                size={size}
              />
            </View>
          ),
        }}
      />
    </MainStack.Navigator>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tempUserId,setTempUserId]=useState(null)

  useEffect(() => {
    const timer2 = setTimeout(() => {
      const isUserLoggedIn = async () => {
        try {
          const data = await AsyncStorage.getItem('userInfo');
          if (data !== null && data !== undefined) {
            setIsLoggedIn(true);
          }
        } catch (error) {
          setIsLoggedIn(false);
        }
      };
      isUserLoggedIn();
    }, 1000);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (isLoading) {
    return <SplashScreen></SplashScreen>;
  } else {
    return (
      <UserProvider value={{isLoggedIn, setIsLoggedIn,tempUserId,setTempUserId}}>
        <NavigationContainer>
          {isLoggedIn ? (
            <MainStackScreen />
          ) : (
            <AuthStackScreen></AuthStackScreen>
          )}
        </NavigationContainer>
      </UserProvider>
    );
  }
}

export default App;
