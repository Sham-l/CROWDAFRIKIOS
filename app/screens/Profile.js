import { View, Text, BackHandler } from 'react-native';
import React, { useContext, useRef, useEffect, useState, useCallback } from 'react';
import { WebView } from "react-native-webview";
import { userContext } from '../utils/userContext';
import { MAIN_URL } from '../constants/api';
import BackButton from '../components/BackButton';
import CustomText from '../components/CustomText';
import Screen from '../components/Screen';
export default function Profile() {
    const [canGoBack, setCanGoBack] = useState(false);
    const webviewRef = useRef(null);
    const { userId ,tempUserId} = useContext(userContext);

  const url = userId ? `${MAIN_URL}member/profile/${userId}` : `${MAIN_URL}member/profile/${tempUserId}` ;
  
    const [title, setTitle] = useState('');


    const onAndroidBackPress = useCallback(() => {
        if (webviewRef.current && canGoBack) {
            webviewRef.current.goBack();
            return true; 
        }

        return true;
    }, [canGoBack]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

       
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
        };
    }, [onAndroidBackPress]);
console.log(title)
    return (
        <Screen>
            {canGoBack &&  <View style={{ height: "10%", backgroundColor: "#FE2929", alignItems: "center", flexDirection: "row",gap:25 }}>
        
        <BackButton onPress={onAndroidBackPress}></BackButton>
        <CustomText style={{fontSize:15,fontWeight:400}} title={title}></CustomText>
      </View>}
            <WebView 
                ref={webviewRef}

        injectedJavaScriptForMainFrameOnly={false}
        injectedJavaScript={`(function() {
          window.ReactNativeWebView.postMessage(document.title);
          true; 
        })();`}
        onMessage={(event) => setTitle(event.nativeEvent.data)}
                onNavigationStateChange={(navState) => {
                    setCanGoBack(navState.canGoBack);
                    console.log(navState)
                    
                    
                
                }}
                source={{ uri: url }} 
            />
        </Screen>
    );
}
