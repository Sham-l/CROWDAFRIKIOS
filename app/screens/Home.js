// import {View, Text} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // --------------custom imports----------
// import Test from './HomeScreen';
// import WelcomeScreen from './WelcomeScreen';
// import SignInScreen from './SignInScreen';
// // ---------------------

// const Tab = createBottomTabNavigator();
// export default function Home() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
        
//         headerShown:false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           backgroundColor: 'white',
//           height:"8%",
//         },
//       }}>
//       <Tab.Screen
//         name="Notification"
//         component={SignInScreen}
//         options={{
          
//           tabBarIcon: ({ size, focused}) => (
//             <View
//               style={{
//                 height:size * 1.5,
//                width:size*1.5,
//                 backgroundColor: focused ? '#FE2929' : 'white',
//                 borderRadius:size * 1.5 ,
//                 alignItems: "center",
//                 justifyContent: "center",
                
                
//               }}>
//               <Icon name="bell-outline" color={focused ? 'white' : 'black'} size={size} />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Home"
//         component={Test}
//         options={{
//           tabBarIcon: ({size, focused}) => (
//             <View
//               style={{
//                 height:size * 1.5,
//                 width:size*1.5,
//                  backgroundColor: focused ? '#FE2929' : 'white',
//                  borderRadius:size * 1.5 ,
//                  alignItems: "center",
//                  justifyContent: "center",
//               }}>
//               <Icon name="home-outline" color={focused ? 'white' : 'black'} size={size} />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={WelcomeScreen}
//         options={{
//           tabBarIcon: ({size, focused}) => (
//             <View
//               style={{
//                 height:size * 1.5,
//                 width:size*1.5,
//                  backgroundColor: focused ? '#FE2929' : 'white',
//                  borderRadius:size * 1.5 ,
//                  alignItems: "center",
//                  justifyContent: "center",
//               }}>
//               <Icon name="account-outline" color={focused ? 'white' : 'black'} size={size} />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
