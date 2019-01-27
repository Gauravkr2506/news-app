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
	showWebPage(url,name){
		
		setTimeout(()=>{this.props.navigation.navigate("WebViewScreen", { url: url,name:name })},1000)
		
	}

	_renderItem = ({ item }) => <MyListItem data={item} navigation={this.props.navigation} />;
	render() {
		return (
			<ScrollView contentContainerStyle={{ margin: 0, padding: 0, backgroundColor: "#000" }}>
				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.amarujala.com/","Amar Ujala")}>
							<Image source={require("./../../img/1.jpg")} resizeMode="contain" style={{ width: 160 }} />
						</TouchableHighlight>
					</View>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.jagran.com/","Danik Jagran")}>
							<Image source={require("./../../img/2.jpg")} resizeMode="contain" style={{ width: 160 }} />
						</TouchableHighlight>
					</View>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
					<TouchableHighlight onPress={() => this.showWebPage("https://www.bbc.com/hindi","BBC")}>
					<Image source={require("./../../img/3.jpg")} resizeMode="contain" style={{ width: 160 }}/>
				</TouchableHighlight>
					</View>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
					<TouchableHighlight onPress={() => this.showWebPage("https://kohraam.com/","Kohraam News")}>
					<Image source={require("./../../img/4.jpg")} resizeMode="contain" style={{ width: 160 }}/>
				</TouchableHighlight>
					</View>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
					<TouchableHighlight onPress={() => this.showWebPage("https://www.cobrapost.com/","Cobra Post")}>
					<Image source={require("./../../img/5.jpg")} resizeMode="contain" style={{ width: 160 }}/>
				</TouchableHighlight>
					</View>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
					<TouchableHighlight onPress={() => this.showWebPage("https://aajtak.intoday.in/","AajTak")}>
					<Image source={require("./../../img/6.jpg")} resizeMode="contain" style={{ width: 160 }}/>
				</TouchableHighlight>
					</View>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
					<TouchableHighlight onPress={() => this.showWebPage("https://www.haribhoomi.com/","Hari Bhoomi News")}>
					<Image source={require("./../../img/7.jpg")} resizeMode="contain" style={{ width: 160 }}/>
				</TouchableHighlight>
					</View>
					<View style={{ flex: 1, padding: 10, alignItems: "center", justifyContent: "center" }}>
					<TouchableHighlight onPress={() => this.showWebPage("https://www.dbnnews.in/","DBN News")}>
					<Image source={require("./../../img/8.jpg")} resizeMode="contain" style={{ width: 160 }}/>
				</TouchableHighlight>
					</View>
				</View>

				
				
				

				
				
				
			</ScrollView>
		);
	}
}
