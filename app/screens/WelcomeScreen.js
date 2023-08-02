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

import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';

import CustomButton from '../components/CustomButton';

export default function LoginScreen({navigation}) {
  const renderHeaderImage = () => (
    <ImageBackground
      style={styles.headerImage}
      source={require('../assets/welcomeImage.jpg')}
      resizeMode="cover"
    />
  );

  const renderWelcomeText = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          CrowdAfrik is a Financial technology (fintech) initiative with a broad
          range of ideas that aim to provide support, finances and deploy
          technical exchanges to Africans with the main goal of poverty
          reduction, industrial development and creating job opportunities.
        </Text>
      </View>
      <CustomButton
        title="Get Started"
        icon="arrow-right"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      {renderHeaderImage()}
      {renderWelcomeText()}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerImage: {
    height: '85%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    width: '100%',
    height: '37%',
    gap: 30,
    paddingHorizontal: '7%',
    paddingVertical: '10%',
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1E233B',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1E233B',
  },
  descContainer: {
    paddingHorizontal: '5%',
  },
});
