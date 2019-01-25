import React from "react";
import { FlatList, View, Text, Image, TouchableHighlight, ScrollView } from "react-native";

import MyListItem from "./../components/main/main-list";

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		// this.getData = this.getData.bind(this);
	}
	componentWillMount() {
		// this.props.LoadData();
	}
	// getData() {
	// 	return this.props.data.map(item => {
	// 		return { key: item.key, tutorial_name: item.tutorial_name, description: item.description, img: item.img };
	// 	});
	// }
	_renderItem = ({ item }) => <MyListItem data={item} navigation={this.props.navigation} />;
	render() {
		return (
			<ScrollView contentContainerStyle={{ margin: 0, padding: 0, backgroundColor: "#000" }}>
				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
						<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://www.amarujala.com/" })}>
							<Image source={require("./../../img/1.jpg")} resizeMode="contain" style={{ width: 160 }} />
						</TouchableHighlight>
					</View>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
						<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://www.jagran.com/" })}>
							<Image source={require("./../../img/2.jpg")} resizeMode="contain" style={{ width: 160 }} />
						</TouchableHighlight>
					</View>
				</View>

				<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://www.bbc.com/hindi" })}>
					<Image source={require("./../../img/3.jpg")} />
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://kohraam.com/" })}>
					<Image source={require("./../../img/4.jpg")} />
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://www.cobrapost.com/" })}>
					<Image source={require("./../../img/5.jpg")} />
				</TouchableHighlight>

				<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://aajtak.intoday.in/" })}>
					<Image source={require("./../../img/6.jpg")} />
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://www.haribhoomi.com/" })}>
					<Image source={require("./../../img/7.jpg")} />
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.props.navigation.navigate("WebViewScreen", { url: "https://www.dbnnews.in/" })}>
					<Image source={require("./../../img/8.jpg")} />
				</TouchableHighlight>
			</ScrollView>
		);
	}
}
