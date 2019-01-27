import React, { Component } from 'react';
 
import { StyleSheet, WebView, Platform, ActivityIndicator} from 'react-native';
 
export default class MainActivity extends Component {
	
 
  ActivityIndicatorLoadingView() {
    
    return (
 
      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
 
     render() {
		const { navigation } = this.props;
		const url = navigation.getParam("url", "https://www.jagran.com/");
       return (
    
         <WebView 
         style={styles.WebViewStyle} 
         source={{ uri: url }}
         javaScriptEnabled={true}
         domStorageEnabled={true}
         renderLoading={this.ActivityIndicatorLoadingView} 
         startInLoadingState={true}  
         />
   
       );
     }
   }
   
 
 
const styles = StyleSheet.create(
{
 
WebViewStyle:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
},
 
ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  
}
});