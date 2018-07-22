import React from 'react';
import { View,Text,Dimensions,StyleSheet } from 'react-native';
import Container from '../component/Container';
import Card from '../component/Card';
import Pic from '../component/Pic';
import Input from '../component/Input';
import Button from '../component/Button';
class StaffLogin extends React.Component{
	render(){
		return(
			 <Container>
			 <Card flex={1} alignItems="center" justifyContent="center">
					<Pic width={Dimensions.get('window').width/2} height={Dimensions.get('window').width/2} location={require('./images/logo.png')} />
			</Card>
			<Card flex={1} alignItems="center" justifyContent="flex-start" marginTop={0}>
 					<Text style={styles.tag}>STAFF LOGIN</Text>
				   <Card flexDirection="row" width={Dimensions.get('window').width-20} height={50} backgroundColor="rgba(255,255,255,0)">
					<Card width={50} height={50} backgroundColor="#FFFFFF" borderTopLeftRadius={8} borderBottomLeftRadius={8}></Card>
				   <Input color="#FFFFFF" placeholder1="Username" width={Dimensions.get('window').width-70} height={50} alignItems="center" backgroundColor="rgba(255,255,255,0)" borderBottomLeftRadius={0} borderTopLeftRadius={0} />
				   	</Card>
				   	<Card marginTop={5} flexDirection="row" width={Dimensions.get('window').width-20} height={50} backgroundColor="rgba(255,255,255,0)">
					<Card width={50} height={50} backgroundColor="#FFFFFF" borderTopLeftRadius={8} borderBottomLeftRadius={8}></Card>
				   <Input color="#FFFFFF" placeholder1="Password" width={Dimensions.get('window').width-70} height={50} alignItems="center" backgroundColor="rgba(255,255,255,0)" borderBottomLeftRadius={0} borderTopLeftRadius={0} />
				   	</Card>

				   	<Button marginTop={5} text="Customer Login" width={Dimensions.get('window').width-80} height={50} borderRadius={8} backgroundColor="rgba(255,255,255,0)" alignItems="center" justifyContent="center" borderWidth={1} borderColor="#FFFFFF">
				   		<Text style={styles.tag}>Login</Text>
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
module.exports = StaffLogin;