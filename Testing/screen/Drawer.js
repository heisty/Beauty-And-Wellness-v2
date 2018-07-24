import React from 'react';
import {
	Button,
	StyleSheet,
	Text,
	View
} from 'react-native';

class Drawer extends React.Component{

	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<Text style={styles.header}>
					Drawer
				</Text>
				<Button 
				onPress={()=> navigate('Modal')}
				title="Open Modal" />
				<Button 
				onPress={()=> navigate('Modal')}
				title="Close Modal" />
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
module.exports = Drawer;