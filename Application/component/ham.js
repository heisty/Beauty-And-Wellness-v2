import React from 'react';
import { Image,TouchableOpacity } from 'react-native';

const Ham = ({onPress,margin}) =>{
	return(
			<TouchableOpacity style={[{width: 30,height: 30},{margin}]}  onPress={onPress}>
				<Image  style={{width: 30,height: 30}} source={require('./images/menu.png')} />
			</TouchableOpacity>
		);
}
module.exports = Ham;