import React from 'react';
import { StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class HeaderButton extends React.Component{
	static propTypes = {
	  onPress: PropTypes.func.isRequired,
	  icon: PropTypes.any.isRequired,
	};
	static defaultProps = {
	  icon: PropTypes.any,
	};

	render(){

		return(
			<View style={styles.container}>
				<Icon
					
					onPress={this.props.onPress}
					/>

			</View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    // position absolutely in the top left corner
    ...StyleSheet.absoluteFillObject,
    top: 20,
    left: 5,
  },
});

module.exports = HeaderButton;