import React from 'react';
import { View } from 'react-native';
import styles from './styles'

const Card = ({children,flex,flexDirection,height,width,alignItems,justifyContent,backgroundColor,borderTopWidth,borderTopColor,borderRadius,borderWidth,borderColor,borderTopLeftRadius,borderBottomLeftRadius,marginTop}) =>{
	return(
			<View style={[styles.card,{flex,flexDirection,height,width,alignItems,justifyContent,backgroundColor,borderTopWidth,borderTopColor,borderRadius,borderWidth,borderColor,borderTopLeftRadius,borderBottomLeftRadius,marginTop}]}>{children}</View>
		);
}
module.exports = Card;