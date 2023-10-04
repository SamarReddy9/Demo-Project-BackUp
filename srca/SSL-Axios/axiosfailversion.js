// import React from 'react';

// // importing basic react-native components
// // required in our application
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import { useState } from 'react';

// // fetch is imported from the package we
// // installed in the previous steps
// import { fetch } from 'react-native-ssl-pinning';

// const App = () => {
// 	const [randomText, setRandomText] = useState("");
// 	const secureFetchData = () => {
// 		//fetching from the jsonplaceholder URL
// 		const URL = 'https://jsonplaceholder.typicode.com/posts/1';
// 		fetch(URL, {
// 			method: 'GET',
// 			timeoutInterval: 10000,
// 			// passing the mycert certificate that we
// 			// generated in the previous steps

// 			// The certs property is an array of certificates,
// 			// we are passing mycert as our certificate
// 			// for ssl pinning
// 			sslPinning: {
// 				certs: ['mycert'],
// 			},
// 		})
// 			.then(response => response.json())
// 			.then(result => {
// 				// Printing the response from server
// 				console.log(result);

// 				// Updating the state value to the data fetched
// 				// result is an object returned by the
// 				// server .body is a property of result object
// 				// for more detail see the screenshot appended
// 				// below this code
// 				setRandomText(result.body);
// 			})
// 			.catch(err => {
// 				//handling any error
// 				console.log(`error: ${err}`);
// 			});
// 	};

// 	// creating a touchable button to fetch data
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.text}>{randomText}</Text>
// 			<TouchableOpacity style={styles.button}
// 				onPress={secureFetchData}>
// 				<Text style={styles.text}>
// 					Fetch secured data
// 				</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };

// // Stylesheet to style the react-native components.
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	text: {
// 		fontSize: 25,
// 	},
// 	button: {
// 		alignItems: 'center',
// 		backgroundColor: 'green',
// 		paddingVertical: 10,
// 		paddingHorizontal: 20,
// 		borderRadius: 4,
// 		marginVertical: 12,
// 	},
// });

// export default App;
