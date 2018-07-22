import { createStackNavigator, DrawerNavigator  } from 'react-navigation';
import WelcomeScreen from '../screen/WelcomeScreen';
import StaffLogin from '../screen/StaffLogin';
import MainScreen from '../screen/Main';
import React from 'react';
import HomeService from '../screen/HomeService';
import { Text } from 'react-native';

/*const DrawerStack = DrawerNavigator({
  WelcomeScreen: {screen: WelcomeScreen}
});

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
})/*, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})*/

const MainNavi = createStackNavigator({
 	WelcomeScreen: {
 		screen: WelcomeScreen,
 		navigationOptions: {
 			header: ()=> null,
 		}
 	},
 	StaffLogin: {
 		screen: StaffLogin,
 		navigationOptions: {
 			header: ()=>null,
 		},
 	},
 	MainScreen: {
 		screen: MainScreen,
 		navigationOptions: {
 			header: ()=>null,
 		}
 	},
 	HSScreen: {
 		screen: HomeService,
 		navigationOptions: {
 			headerTitle: 'Home Services List',
 		}
 	}
});

/*const PrimaryNav = createStackNavigator({
  MainNavi: { screen: MainNavi },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'MainNavi'
})*/

module.exports = MainNavi;