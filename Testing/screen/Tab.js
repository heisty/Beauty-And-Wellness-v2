import React from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  
  TabNavigator
} from 'react-navigation';
import { createMaterialBottomTabNavigator  } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';
import Modal from './Modal';
import Drawer from './Drawer';

// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: "s Profile",
    }),
  },
}, {
  headerMode: 'screen',
});

// Tab navigation for Home and Settings screens
const TabNavigation = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home X',
      //tabBarIcon: ({ tintColor, focused }) => <Icon name="md-add" size={30} color="#4F8EF7" />
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      //tabBarIcon: ({ tintColor, focused }) => <Icon
       // name={focused ? 'ios-settings' : 'ios-settings-outline'}
       /// size={26}
      //  style={{ color: tintColor }}
      ///>
    },  
  },
  Profile : {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      }
    },
    Modal : {
      screen: Modal,
      navigationOptions: {
        tabBarLabel: 'Modal',
      }
    },
},{
  initialRouteName: 'Home',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' }});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
export default StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});