import Reactotron from "reactotron-react-native";

if (__DEV__) {
	const tron = Reactotron.configure({ host: "yourIP" })
		.useReactNative()
		.connect();

	tron.clear();

	console.tron = tron;
}
