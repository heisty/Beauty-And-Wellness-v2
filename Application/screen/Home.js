import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	Dimensions,
	Image

} from 'react-native';
import Ham from '../component/ham';
import Container from '../component/Container';
import Card from '../component/Card';




class Home extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return(

				<View style={styles.container}>

				<Card flex={1} >
					<Card flexDirection="row" borderBottomWidth={1} borderBottomColor="gray" width={Dimensions.get('window').width} height={50} alignItems="baseline" justifyContent="flex-start">
					<Ham margin={10} onPress={()=> this.props.navigation.openDrawer()}/>
					<Text style={styles.text}>JNL SALON</Text>
					<View style={styles.notify}>
						<Image style={styles.normal} source={require('./images/notification.png')} />
					</View>
					</Card>
					
				</Card>
				</View>
			);
	}
}
const styles = StyleSheet.create({
	normal: {
		width: 30,
		height: 30,
	},
	notify: {
		alignItems: 'flex-end',
		marginRight: 10,
	},
  text: {
  	color: '#28B76A',
  	fontWeight: '200',
  	fontSize: 20,
  	flexGrow: 1,
  	fontFamily: 'Oswald-Bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    position: 'absolute' 

  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});
module.exports = Home;