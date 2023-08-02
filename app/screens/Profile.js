import { View, Text, BackHandler } from 'react-native';
import React, { useContext, useRef, useEffect, useState, useCallback } from 'react';
import { WebView } from "react-native-webview";
import { userContext } from '../utils/userContext';
import { MAIN_URL } from '../constants/api';
import BackButton from '../components/BackButton';
import CustomText from '../components/CustomText';

export default function Profile() {
    const [canGoBack, setCanGoBack] = useState(false);
    const webviewRef = useRef(null);
    const { userId } = useContext(userContext);
    const url = `${MAIN_URL}member/profile/${userId}`;
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
console.log(typeof title)
    return (
        <View style={{ flex: 1 }}>
            {canGoBack &&  <View style={{ height: "10%", backgroundColor: "#FE2929", alignItems: "center", flexDirection: "row",gap:25 }}>
        
        <BackButton onPress={onAndroidBackPress}></BackButton>
        <CustomText style={{fontSize:15,fontWeight:400}} title={title}></CustomText>
      </View>}
            <WebView 
                ref={webviewRef}
                onNavigationStateChange={(navState) => {
                    setCanGoBack(navState.canGoBack);
                    if (!navState.loading) {
                        setTitle(navState.title);
                    }
                    else {
                        setTitle('...')
                    }
                    
                
                }}
                source={{ uri: url }} 
            />
        </View>
    );
}
