import {View, Text, BackHandler} from 'react-native';
import React, {useEffect, useState, useRef, useContext,useCallback} from 'react';
import {WebView} from 'react-native-webview';
import {MAIN_URL} from '../constants/api';
import {userContext} from '../utils/userContext';
import BackButton from '../components/BackButton';
import CustomText from '../components/CustomText';
export default function HomeScreen({navigation}) {
  const {userId} = useContext(userContext);
  const [canGoBack, setCanGoBack] = useState(false);
  const [title, setTitle] = useState('');
  const webviewRef = useRef(null);

  const url = userId ? `${MAIN_URL}member/home/${userId}` : null;
 





  const onAndroidBackPress = useCallback(() => {
    if (webviewRef.current && canGoBack) {
      webviewRef.current.goBack();
      
      
        return true; 
    }

    return false;
}, [canGoBack]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

    console.log(title)
    return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    };
}, [onAndroidBackPress]);
  return (
    <View style={{ flex: 1 }}>
    {canGoBack && title !== "Home" && title !== "search.hide" && <View style={{ height: "10%", backgroundColor: "#FE2929", alignItems: "center", flexDirection: "row",gap:25 }}>
        
        <BackButton onPress={onAndroidBackPress}></BackButton>
        <CustomText style={{fontSize:20,fontWeight:500}} title={title}></CustomText>
      </View>}
      {url && <WebView
        ref={webviewRef}

        // injectedJavaScript={`window.ReactNativeWebView.postMessage(document.title)`}
        // onMessage={(event) => {
        //   setTitle(event.nativeEvent.data);
        // }}
        onNavigationStateChange={navState => {
         
          if (!navState.loading) {
            setCanGoBack(navState.canGoBack);
              setTitle(navState.title)
            } else {
              setTitle('...')
          }
         
        }}
        source={{ uri: url }}
      />}
    </View>
  );
}
