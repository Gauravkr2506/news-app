import React from "react";
import SplashScreen from "react-native-splash-screen";
import { FlatList, View, Text, Image, TouchableHighlight, ScrollView } from "react-native";

import MyListItem from "./../components/main/main-list";

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.showWebPage = this.showWebPage.bind(this);
	}
	componentDidMount() {
		SplashScreen.hide();
	}
	showWebPage(url, name) {
		setTimeout(() => {
			this.props.navigation.navigate("WebViewScreen", { url: url, name: name });
		}, 1000);
	}

	_renderItem = ({ item }) => <MyListItem data={item} navigation={this.props.navigation} />;
	render() {
		return (
			<ScrollView contentContainerStyle={{ margin: 0, padding: 0, backgroundColor: "#ccc" }}>
				<View>
					<View style={{ flexDirection: "row" }}>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.amarujala.com/", "Amar Ujala")} style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
						<View style={{ backgroundColor: "red", margin: 3, padding: 2 }}>
							<View style={{alignItems: "center", justifyContent: "center" }}>
								<Image source={require("./../../img/1.jpg")} resizeMode="contain" style={{ width: 100, height: 53 }} />
							</View>
							<View style={{backgroundColor:"orange",width:100}}><Text style={{textAlign:"center"}}>Amar Unala</Text></View>
						</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")}>
						<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "red", margin: 3, padding: 1 }}>
								<Image source={require("./../../img/2.jpg")} resizeMode="contain" style={{ width: 100, height: 53 }} />
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.bbc.com/hindi", "BBC")}>
						<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "red", margin: 3, padding: 1 }}>
								<Image source={require("./../../img/3.jpg")} resizeMode="contain" style={{ width: 100, height: 53 }} />
							</View>
						</TouchableHighlight>
					</View>
					{/* <View style={{ flexDirection: "row" }}>
						<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
							<TouchableHighlight onPress={() => this.showWebPage("https://www.bbc.com/hindi", "BBC")}>
								<Image source={require("./../../img/3.jpg")} resizeMode="contain" style={{ width: 160 }} />
							</TouchableHighlight>
						</View>
						<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
							<TouchableHighlight onPress={() => this.showWebPage("https://kohraam.com/", "Kohraam News")}>
								<Image source={require("./../../img/4.jpg")} resizeMode="contain" style={{ width: 160 }} />
							</TouchableHighlight>
						</View>
					</View>
					<View style={{ flexDirection: "row" }}>
						<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
							<TouchableHighlight onPress={() => this.showWebPage("https://www.cobrapost.com/", "Cobra Post")}>
								<Image source={require("./../../img/5.jpg")} resizeMode="contain" style={{ width: 160 }} />
							</TouchableHighlight>
						</View>
						<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
							<TouchableHighlight onPress={() => this.showWebPage("https://aajtak.intoday.in/", "AajTak")}>
								<Image source={require("./../../img/6.jpg")} resizeMode="contain" style={{ width: 160 }} />
							</TouchableHighlight>
						</View>
					</View>
					<View style={{ flexDirection: "row" }}>
						<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
							<TouchableHighlight onPress={() => this.showWebPage("https://www.haribhoomi.com/", "Hari Bhoomi News")}>
								<Image source={require("./../../img/7.jpg")} resizeMode="contain" style={{ width: 160 }} />
							</TouchableHighlight>
						</View>
						<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
							<TouchableHighlight onPress={() => this.showWebPage("https://www.dbnnews.in/", "DBN News")}>
								<Image source={require("./../../img/8.jpg")} resizeMode="contain" style={{ width: 160 }} />
							</TouchableHighlight>
						</View>
					</View> */}
				</View>
			</ScrollView>
		);
	}
}
