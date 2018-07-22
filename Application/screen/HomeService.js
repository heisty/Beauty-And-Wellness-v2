import React from 'react';
import Card from '../component/Card';
import Button from '../component/Button';
import { Text,View,Dimensions,StyleSheet } from 'react-native';

class HomeService extends React.Component{
	render(){
		return(
			<View>
			 <Card alignItems="center" justifyContent="center" width={Dimensions.get('window').width} height={40} backgroundColor="#28B76A">
              <Text style={styles.tag}>Available Services</Text>
            </Card>

         
            <Card alignItems="center" justifyContent="center" marginTop={20}>
              <Button alignItems="center" flexDirection="row" justifyContent="center"  width={Dimensions.get('window').width-30} height={80} backgroundColor="rgba(255,255,255,0.3)" borderWidth={1} borderColor="#28B76A" borderRadius={8}>
                <Text style={styles.tagContent}>Service Name</Text>
                <Text style={styles.tagContent}>i</Text>
              </Button>
            </Card>
            </View>
			);
	}
}
const styles = StyleSheet.create({
  // App container
  menu: {
    fontSize: 25,
    color: '#000000',
    fontFamily: 'Oswald-Light',
  },
   tagHead: {
      fontSize: 25,
      fontFamily: 'Oswald-Light',
      color: '#FFFFFF',
   },
   tagContent: {
    fontFamily: 'Oswald-Light',
    fontSize: 20,
    color: '#28B76A',
  },
  tag: {
    fontFamily: 'Oswald-Light',
    fontSize: 15,
    color: '#FFFFFF',
  },
  services: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header1: {
    fontFamily: 'Oswald-Bold',
    color: '#FFFFFF',
    fontSize: 15,
  },
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#47908E',         // Background color
  },
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space             // Center horizontally
    backgroundColor: '#FFFFFF',         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontFamily: 'Oswald-Light',               // Change font family
    fontSize: 26,                       // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: 'rgba(0, 0, 255, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Oswald-Light',
    fontSize: 18,
    flexGrow: 1,
  },
});
module.exports = HomeService;