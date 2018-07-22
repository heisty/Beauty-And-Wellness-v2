import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,
  Dimensions,
  ScrollView,
  DrawerLayoutAndroid         // Container component
} from 'react-native';
import Tabs from './tabs';
import Card from '../component/Card';
import Button from '../component/Button';
import Container from '../component/Container';
export default class Main extends Component {

  traverseHS = ()=>{
    this.props.navigation.navigate('HSScreen');
  }
  render() {
    
   var navigationView = 
   <Container>
   <Card width={300} height={80} alignItems="center" justifyContent="center" backgroundColor="#FFFFFF"><Text style={styles.menu}>Salon Menu</Text></Card>
   <Card alignItems="center" justifyContent="center" marginTop={30}>
    <Button alignItems="center" justifyContent="center" width={250} height={80} marginTop={10} backgroundColor="rgba(255,255,255,0)" borderWidth={1} borderColor="#FFFFFF" borderRadius={8}>
      <Text style={styles.tagHead}>User Profile</Text>
    </Button>
     <Button alignItems="center" onPressed={this.traverseHS} justifyContent="center" width={250} height={80} marginTop={10} backgroundColor="rgba(255,255,255,0)" borderWidth={1} borderColor="#FFFFFF" borderRadius={8}>
      <Text style={styles.tagHead}>Home Services</Text>
    </Button>
     <Button alignItems="center" justifyContent="center" width={250} height={80} marginTop={10} backgroundColor="rgba(255,255,255,0)" borderWidth={1} borderColor="#FFFFFF" borderRadius={8}>
      <Text style={styles.tagHead}>Salon Services</Text>
    </Button>
     <Button alignItems="center" justifyContent="center" width={250} height={80} marginTop={10} backgroundColor="rgba(255,255,255,0)" borderWidth={1} borderColor="#FFFFFF" borderRadius={8}>
      <Text style={styles.tagHead}>Our Team</Text>
    </Button>
     <Button alignItems="center" justifyContent="center" width={250} height={80} marginTop={10} backgroundColor="rgba(255,255,255,0)" borderWidth={1} borderColor="#FFFFFF" borderRadius={8}>
      <Text style={styles.tagHead}>About Us</Text>
    </Button>
    
    </Card>
   </Container>
    return (
      <View style={styles.container}>
           <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
        <Tabs>
          
          {/* First tab */}
          
          <View title="Salon Services" style={styles.content}>
            
            <View style={styles.services}>
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
           
          </View>
          {/* Second tab */}
          <View title="Our Crew" style={styles.content}>
            <Card alignItems="center" justifyContent="center" marginTop={10}>
              <Button alignItems="center" flexDirection="row" justifyContent="center"  width={Dimensions.get('window').width-100} height={Dimensions.get('window').width-100} backgroundColor="rgba(255,255,255,0.3)" borderWidth={1} borderColor="#28B76A" borderRadius={8}>
                <Text style={styles.tagContent}>Crew Name</Text>
                
              </Button>
            </Card>
          </View>
          {/* Third tab */}
          <View title="Feedback" style={styles.content}>
            <Card flex={1} alignItems="center" justifyContent="center">
              <Text>Share us your experiences</Text>

            </Card>
          </View>

        </Tabs>
        </DrawerLayoutAndroid>
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