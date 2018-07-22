import React from 'react';
import Container from '../component/Container';
import Card from '../component/Card';
import Button from '../component/Button';
import { Text,Dimensions,StyleSheet,View } from 'react-native';

class WelcomeScreen extends React.Component{
	render(){
		return(
			
				<Card flex={1} alignItems="center" justifyContent="center">
		
					<Text style={styles.tagHead}>How Should We Call You?</Text>
			
				</Card>
			
			);
	}
}
const styles = StyleSheet.create({
	tagHead: {
		fontFamily: 'Oswald-Bold',
		fontSize: 20,
		flexGrow: 1,
	}
});
module.exports = WelcomeScreen;