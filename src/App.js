import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeIndex from './pages/home/index';
import BookIndex from './pages/book/index';
import AboutIndex from './pages/about/index';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeIndex,
    navigationOptions: {
        title: '主页',
        tabBarIcon: ({tintColor}) => (<Icon name="home" size={20} color={tintColor} />)
    },
  },
  Book: {
      screen: BookIndex,
      navigationOptions: {
          title: '教程',
          tabBarIcon: ({tintColor}) => (<Icon name="book" size={20} color={tintColor} />)
      },
  },
  About: {
      screen: AboutIndex,
      navigationOptions: {
          title: '关于',
          tabBarIcon: ({tintColor}) => (<Icon name="infocirlceo" size={20} color={tintColor} />)
      },
  },
}, {
    tabBarOptions: {
        activeTintColor: '#5bc0de',
        inactiveTintColor: '#999',
    },
});

export default createAppContainer(TabNavigator);
