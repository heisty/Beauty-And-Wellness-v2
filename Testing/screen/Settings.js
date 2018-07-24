import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import HeaderButton from './HeaderButton';

class Settings extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<HeaderButton onPress={()=> navigate('DrawerOpen')} />
				<Text style={styles.header}>
				Settings
				</Text>
				   <Button
          onPress={() => navigate('Profile', { user: 'Tom' })}
          title="Open Profile"
        />
        <Button
          onPress={() => navigate('Modal')}
          title="Open Modal"
        />
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
module.exports = Settings;