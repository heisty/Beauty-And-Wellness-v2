import { StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
	input: {
		width: Dimensions.get('window').width-30,
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		width: Dimensions.get('window').width-70,
		height: 53,
		fontFamily: 'Oswald-Light',
		fontSize: 18,
		color: '#FFFFFF',
	}
});
module.exports = styles;