import { View, Text,BackHandler } from 'react-native'
import React,{useContext,useEffect,useCallback,useState,useRef} from 'react'
import { WebView } from "react-native-webview"
import { userContext } from '../utils/userContext';
import { MAIN_URL } from '../constants/api';
import Screen from '../components/Screen';
export default function Profile() {
    const {userId,tempUserId} = useContext(userContext)
    const url = userId ? `${MAIN_URL}member/notifications/${userId}` : `${MAIN_URL}member/notifications/${tempUserId}` ;
    const [canGoBack, setCanGoBack] = useState(false);
    const webviewRef = useRef(null);

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


  return (
    <Screen>
      <WebView  ref={webviewRef}
        
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
        }} source={{ uri: url }} />
    </Screen>
  )
}