import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,

} from 'react-native';

class Promotions extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>Promotions</Text>
			</View>
		);
	}
}
export default Promotions;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
