import React from "react";

import { TouchableOpacity, View, Text, InteractionManager, Image } from "react-native";

export default class MyListItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	SelectTutorial(key) {
		InteractionManager.runAfterInteractions(() => this.props.SelectTutorial(key));
		this.props.navigation.navigate("VideoList");
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image style={{ width: 66, height: 58 }} source={require("./../../../img/au.png")} />
			</View>
		);
	}
}
