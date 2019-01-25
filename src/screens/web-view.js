import React from "react";
import { WebView } from "react-native";

export default class WebViewScreen extends React.Component {
	render() {
		const { navigation } = this.props;
		const url = navigation.getParam("url", "https://www.jagran.com/");
		return <WebView javaScriptEnabled={true} injectJavaScript={() => {}} source={{ uri: url }} style={{ marginTop: 20 }} />;
	}
}
