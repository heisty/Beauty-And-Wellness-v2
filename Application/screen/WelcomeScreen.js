import React from 'react';
import Container from '../component/Container';
import Card from '../component/Card';
import Button from '../component/Button';
import { Text,Dimensions,StyleSheet,View } from 'react-native';
import Pic from '../component/Pic';
import Input from '../component/Input';
import PropTypes from 'prop-types';

class WelcomeScreen extends React.Component{

	traverseStaffLogin = ()=>{
			this.props.navigation.navigate('StaffLogin');
		};
	traverseCustomerLogin = ()=>{
			this.props.navigation.navigate('MainScreen');
		}
	render(){
		
		return(
			
				<Container>
				 <Card flex={1} alignItems="center" justifyContent="center">
					<Pic width={Dimensions.get('window').width/2} height={Dimensions.get('window').width/2} location={require('./images/logo.png')} />
				 </Card>
				 <Card flex={1} alignItems="center" justifyContent="flex-start" marginTop={0}>
 					<Text style={styles.tag}>How do we call you?</Text>
				   <Card flexDirection="row" width={Dimensions.get('window').width-20} height={50} backgroundColor="rgba(255,255,255,0)">
					<Card width={50} height={50} backgroundColor="#FFFFFF" borderTopLeftRadius={8} borderBottomLeftRadius={8}></Card>
				   <Input color="#FFFFFF" placeholder1="What is your Name?" width={Dimensions.get('window').width-70} height={50} alignItems="center" backgroundColor="rgba(255,255,255,0)" borderBottomLeftRadius={0} borderTopLeftRadius={0} />
				   	</Card>

				   	<Button onPressed={this.traverseCustomerLogin} marginTop={5} text="Customer Login" width={Dimensions.get('window').width-80} height={50} borderRadius={8} backgroundColor="rgba(255,255,255,0)" alignItems="center" justifyContent="center" borderWidth={1} borderColor="#FFFFFF">
				   		<Text style={styles.tag}>Customer Login</Text>
				   	</Button>
				   	<Button onPressed={this.traverseStaffLogin} marginTop={5} text="Customer Login" width={Dimensions.get('window').width-80} height={50} borderRadius={8} backgroundColor="rgba(255,255,255,0)" alignItems="center" justifyContent="center" borderWidth={1} borderColor="#FFFFFF">
				   		<Text style={styles.tag}>Staff Login</Text>
				   	</Button>
				
				 </Card>

				
				</Container>
			
			);
	}
}
const styles = StyleSheet.create({
	tag: {
		fontFamily: 'Oswald-Light',
		fontSize: 20,
		margin: 0,
		color: '#FFFFFF',
	}
});

WelcomeScreen.propTypes = {
	navigation: PropTypes.object,
}
module.exports = WelcomeScreen;