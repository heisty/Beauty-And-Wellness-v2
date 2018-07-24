import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

class Profile extends React.Component{
	componentWillUnmount(){
		
	}
     static navigationOptions = {
     	headerStyle: {
     		backgroundColor: '#FFF',
     	}
     };
	render(){
		const { navigate}=this.props.navigation;
		return(
			<View style={styles.container}>
				<Text style={styles.header}>
				This is 's Profile
				</Text>
				<Button title="Open Modal" onPress={()=> navigate('Modal')}/>
			</View>
			);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});
module.exports = Profile;