import React, { Component } from "react";

import { Animated, Easing } from "react-native";

import Main from "./src/screens/main";
import WebViewScreen from "./src/screens/web-view";

import { createStackNavigator, HeaderBackBtton, createAppContainer } from "react-navigation";
const option = {
	headerStyle: {
		backgroundColor: "#c4302b"
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "normal",
		fontSize: 17
	}
};
const MainNav = createStackNavigator(
	{
		Main: {
			screen: Main,
			navigationOptions: ({ navigation }) => ({
				title: "NEWS"
			})
		},
		WebViewScreen: {
			screen: WebViewScreen,
			navigationOptions: ({ navigation }) => ({
				title: navigation.state.params.name
			})
		}
	},
	{
		defaultNavigationOptions: () =>
			Object.assign(
				{
					initialRouteName: "Main"
				},
				option
			),
		mode: "card",
		headerMode: "screen",
		headerTransitionPreset: "uikit",
		transitionConfig: () => ({
			transitionSpec: {
				duration: 300,
				easing: Easing.out(Easing.poly(4)),
				timing: Animated.timing
			},
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const { index } = scene;

				const width = layout.initWidth;
				const translateX = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [width, 0, 0]
				});
				const opacity = position.interpolate({
					inputRange: [index - 1, index - 0.99, index],
					outputRange: [0, 1, 1]
				});

				return { opacity, transform: [{ translateX: translateX }] };
			}
		})
	}
);

const AppContainer = createAppContainer(MainNav);

class App extends Component {
	render() {
		return <AppContainer />;
	}
}
export default App;
