import React from 'react';
import { View } from 'react-native';
import styles from './styles'

const Card = ({children,flex,flexDirection,height,width,alignItems,justifyContent,backgroundColor,borderTopWidth,borderTopColor}) =>{
	return(
			<View style={[styles.card,{flex,flexDirection,height,width,alignItems,justifyContent,backgroundColor,borderTopWidth,borderTopColor}]}>{children}</View>
		);
}
module.exports = Card;