import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Button = ({children,text,onPressed,height,width,flex,flexDirection,alignItems,justifyContent,borderRadius,borderTopWidth,borderTopColor,backgroundColor,fontSize,borderWidth,borderColor,marginTop}) =>{
	return(
			<TouchableOpacity onPress={onPressed} style={[styles.btn,{height,width,flex,alignItems,justifyContent,borderRadius,borderTopWidth,borderTopColor,backgroundColor,borderWidth,borderColor,marginTop,flexDirection}]}>
				{children}
			</TouchableOpacity>
		);
}
Button.propTypes = {
	onPress: PropTypes.func,
}
module.exports = Button;