import React from "react";
import SplashScreen from "react-native-splash-screen";
import { FlatList, View, Text, Image, TouchableHighlight, TouchableNativeFeedback, ScrollView } from "react-native";

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
			<View style={{ flex: 1, backgroundColor: "#ccc" }}>
				<ScrollView contentContainerStyle={{ margin: 0, padding: 0, backgroundColor: "#ccc", flex: 0 }}>
					<View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.amarujala.com/", "अमर उजाला")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>अमर उजाला</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "दैनिक जागरण")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/2.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>दैनिक जागरण</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.bbc.com/hindi", "BBC News हिन्दी")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/3.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>BBC News हिन्दी</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/4.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/5.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/6.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/7.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/8.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/1.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Item 1</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>

						{/* <View style={{ flexDirection: "row" }}>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
							<View style={{ backgroundColor: "red", margin: 3, flexDirection: "column" }}>
								<View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
									<Image source={require("./../../img/1.jpg")} resizeMode="center" />
								</View>
								<View style={{ backgroundColor: "orange" }}>
									<Text style={{ textAlign: "center" }}>Amar Unala</Text>
								</View>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.jagran.com/", "Danik Jagran")} style={{ flex: 1 }}>
							<View style={{ backgroundColor: "red", margin: 3, flexDirection: "column" }}>
								
								<View style={{ backgroundColor: "orange" }}>
									<Text style={{ textAlign: "center" }}>Amar Unala</Text>
								</View>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.showWebPage("https://www.bbc.com/hindi", "BBC")} style={{ flex: 1 }}>
							<View style={{ backgroundColor: "red", margin: 3, flexDirection: "column" }}>
								<View style={{ alignItems: "center", justifyContent: "center" }}>
									<Image source={require("./../../img/1.jpg")} resizeMode="center" />
								</View>
								<View style={{ backgroundColor: "orange" }}>
									<Text style={{ textAlign: "center" }}>Amar Unala</Text>
								</View>
							</View>
						</TouchableHighlight>
					</View> */}
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
			</View>
		);
	}
}
