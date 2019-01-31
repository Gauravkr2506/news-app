import React from "react";
import SplashScreen from "react-native-splash-screen";
import { FlatList, View, Text, Image, TouchableHighlight, TouchableNativeFeedback, ScrollView } from "react-native";

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
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.bbc.com/hindi", "BBC न्यूज़ हिन्दी")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/3.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>BBC न्यूज़ हिन्दी</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://kohraam.com/", "कोहराम न्यूज़")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/4.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>कोहराम न्यूज़</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.cobrapost.com/", "Cobrapost")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/5.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Cobrapost</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://aajtak.intoday.in/", "आज तक")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/6.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>आज तक</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.haribhoomi.com/", "हरिभूमि")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/7.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>हरिभूमि</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://www.dbnnews.in/", "DBN न्यूज़")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/8.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>DBN न्यूज़</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://zeenews.india.com/hindi", "Zee न्यूज़")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/zee-news.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>Zee न्यूज़</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://khabar.ndtv.com/?pfrom=home-header-globalnav", "NDTV इंडिया")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/ndtv.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>NDTV इंडिया</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://hindi.indiatvnews.com/", "इंडिया टीवी")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/india-tv.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>इंडिया टीवी</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://hindi.news18.com/", "न्यूज़ 18")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/news18.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>न्यूज़ 18</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://abpnews.abplive.in/", "ABP न्यूज़")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/abp.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>ABP न्यूज़</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://aajtak.intoday.in/indiatoday-hindi/", "इंडिया-टुडे")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/india-today.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>इंडिया-टुडे</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://hindi.timesnownews.com/", "टाइम्स नाउ हिंदी")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/times-now.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>टाइम्स नाउ हिंदी</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
						<View style={{ flexDirection: "row", alignItem: "center", justifyContent: "center", marginTop: 10 }}>
							<TouchableNativeFeedback onPress={() => this.showWebPage("http://www.samaylive.com/", "सहारा समय")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/sahara-samay.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>सहारा समय</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("http://ddnews.gov.in/hi", "दूरदर्शन न्यूज़")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/dd-news.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>दूरदर्शन न्यूज़</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback onPress={() => this.showWebPage("https://ibn7.in/", "IBN7 न्यूज़")} style={{ flex: 1 }}>
								<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 3 }}>
									<View style={{ borderWidth: 2, backgroundColor: "red", borderColor: "red", width: 110, height: 64, alignItems: "center", justifyContent: "center" }}>
										<Image source={require("./../../img/ibn7.jpg")} resizeMode="center" style={{ width: 106, height: 60 }} />
									</View>
									<View style={{ backgroundColor: "orange", height: 26, borderWidth: 2, borderColor: "red", width: 110, alignItems: "center", justifyContent: "center" }}>
										<Text numberOfLines={1}>IBN7 न्यूज़</Text>
									</View>
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
