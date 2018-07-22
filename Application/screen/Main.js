import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,
  Dimensions,
  ScrollView         // Container component
} from 'react-native';
import Tabs from './tabs';
import Card from '../component/Card';
import Button from '../component/Button';
export default class Main extends Component {
  render() {
   
    return (
      <View style={styles.container}>
        <Text>JNL</Text>
        <Tabs>
          {/* First tab */}

          <View title="Salon Services" style={styles.content}>
            <Card width={Dimensions.get('window').width} height={30} backgroundColor="teal">
              <Text style={styles.header1}>Available Services</Text>
              </Card>
          <ScrollView>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           <Button height={80} width={Dimensions.get('window').width} backgroundColor="white" text="Service 1" borderTopWidth={1} borderTopColor="black"/>
           </ScrollView>
          </View>
          {/* Second tab */}
          <View title="Our Crew" style={styles.content}>
           
            <Text style={styles.text}>
              Our Crew Lists
            </Text>
          </View>
          {/* Third tab */}
          <View title="Feedback" style={styles.content}>
            <Card flex={1} alignItems="center" justifyContent="center">
              <Text>Share us your experiences</Text>

            </Card>
          </View>

        </Tabs>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  // App container
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