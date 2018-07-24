import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import HeaderButton from './HeaderButton';

class Modal extends React.Component{
	render(){
		const { goBack } = this.props.navigation;
		return(
			<View style={styles.container}>
				<HeaderButton icon="md-close" onPress={() => goBack()}/>
				<Text style={styles.header}>Im a modal</Text>
				<Button onPress={()=> goBack()} title="Close Me" />

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
module.exports = Modal;