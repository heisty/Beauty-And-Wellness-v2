import React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator,
  
  TabNavigator
} from 'react-navigation';
import { Dimensions,Image } from 'react-native';
import { createMaterialBottomTabNavigator  } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/Home';
import Settings from '../screen/Settings';
import Profile from '../screen/Profile';
import Modal from '../screen/Modal';
import Drawer from '../screen/Drawer';
import Services from '../screen/Services';
import Crew from '../screen/Crew';
import Feedback from '../screen/Feedback';
import XSettings from '../screen/Settings';
import WelcomeScreen from '../screen/WelcomeScreen';
import StaffLogin from '../screen/StaffLogin';
//compo
import Pic from '../component/Pic';

 
const TabNavigation = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      showIcon: true,
      tabBarColor: '#388E3C',
      tabBarIcon: ({ tintColor, focused }) => <Image resizeMode="contain" style={{width: 24,height: 24,}} source={require('./icons/home.png')}/>
    },
  },
  Services: {
    screen: Services,
    navigationOptions: {
      tabBarLabel: 'Salon',
      tabBarColor: '#0097A7',
      tabBarIcon: ({ tintColor, focused }) => <Image resizeMode="stretch" style={{width: 24,height: 24,}} source={require('./icons/salon.png')}/>
  
      //tabBarIcon: ({ tintColor, focused }) => <Icon
       // name={focused ? 'ios-settings' : 'ios-settings-outline'}
       /// size={26}
      //  style={{ color: tintColor }}
      ///>
    },  
  },
  Crew : {
      screen: Crew,
      navigationOptions: {
        tabBarLabel: 'Crew',
        tabBarColor: '#303F9F',
        tabBarIcon: ({ tintColor, focused }) => <Image resizeMode="stretch" style={{width: 24,height: 24,}} source={require('./icons/crew.png')}/>
  
      }
    },
    Feedback : {
      screen: Feedback,
      navigationOptions: {

        tabBarLabel: 'Feedback',
         tabBarColor: '#C2185B',
        tabBarIcon: ({ tintColor, focused }) => <Image resizeMode="stretch" style={{width: 24,height: 24,}} source={require('./icons/feedback.png')}/>

      }
    },

},{
  initialRouteName: 'Home',
  shifting: false,
  activeTintColor: '#FFFFFF',
  inactiveTintColor: '#000000',
  barStyle: { backgroundColor: '#28B76A',width: Dimensions.get('window').width,height: Dimensions.get('window').width/5,alignItems: 'center',justifyContent:'center' }});

const ComponentNavigation = createStackNavigator({
      WelcomeScreen: {screen: WelcomeScreen,navigationOptions: {header: ()=> null}},
      StaffLogin: {screen: StaffLogin,navigationOptions: {header: ()=> null}},
});
const DrawerNavigation = createDrawerNavigator({
   Tabs: {screen: TabNavigation},
   


},{contentComponent: props => <Drawer {...props} />});


const MainNavigation = createStackNavigator({
   Component: {screen: ComponentNavigation,navigationOptions: {header: ()=> null}},
   Tab: {screen: DrawerNavigation,navigationOptions: {
    header: ()=> null,


  }},
   
},{initialRouteName:'Tab'})
module.exports = MainNavigation;

