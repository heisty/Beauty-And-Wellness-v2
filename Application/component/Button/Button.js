import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import styles from './styles';

const Button = ({children,text,onPress,height,width,flex,flexDirection,alignItems,justifyContent,borderRadius,borderTopWidth,borderTopColor,backgroundColor,fontSize}) =>{
	return(
			<TouchableOpacity style={[styles.btn,{height,width,flex,alignItems,justifyContent,borderRadius,borderTopWidth,borderTopColor,backgroundColor}]}>
				<Text style={[styles.text,{fontSize}]}>{text}</Text>
			</TouchableOpacity>
		);
}
module.exports = Button;