import React from 'react';
import { View,Image,ImageBackground } from 'react-native';
import styles from './styles';

const Container = ({children,backgroundColor}) => {

	return(
		<ImageBackground style={{flex: 1}} source={require('./images/background.png')}>{children}</ImageBackground>
		);
    


}

module.exports = Container;