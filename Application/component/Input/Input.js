import React from 'react';
import { TouchableHighlight,TextInput } from 'react-native';
import styles from './styles';
const Input = ({children,onChangeText,width,height,alignItems,backgroundColor,borderTopLeftRadius,borderBottomLeftRadius,placeholder1,color})=>{
	return(
		<TouchableHighlight style={[styles.input,{width,height,alignItems,backgroundColor,borderTopLeftRadius,borderBottomLeftRadius}]}>
			<TextInput placeholder={placeholder1} underlineColorAndroid="transparent" style={[styles.text,{color}]}>{children}</TextInput>
		</TouchableHighlight>
		);
}
module.exports = Input;