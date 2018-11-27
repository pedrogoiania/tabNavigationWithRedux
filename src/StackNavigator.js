import React from 'react'
import { View, Text, Platform, TextInput } from 'react-native'

import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './views/Home'
import Scene1 from './views/Scene1'
import Scene2 from './views/Scene2'

const StackNavigatorIOS = createStackNavigator(
    {
        Scene2,
        tabNavigation: {
            screen: createBottomTabNavigator(
                {
                    Home,
                    Scene1
                }, {
                    defaultNavigationOptions: ({ navigation }) => ({
                        tabBarIcon: ({ focused, horizontal, tintColor }) => {
                            const { routeName } = navigation.state;
                            let iconName;
                            if (routeName === 'Home') {
                                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                            }
                            if (routeName === 'Scene1') {
                                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                            }
                            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                        }
                    }),
                    tabBarOptions: {
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }
                }
            ),
            navigationOptions: ({ navigation }) => {
                let searchNavBar = navigation.state.routes[0].params && navigation.state.routes[0].params.searchNavBar
                return ({
                    // header: searchNavBar,
                    headerTitle: searchNavBar,
                    headerStyle: { 
                        backgroundColor: 'blue'
                    }
                })
            }
        }
    }, {
        initialRouteName: 'tabNavigation',
    }
)

const StackNavigatorAndroid = createStackNavigator(
    {
        Scene2,
        tabNavigation: {
            screen: createMaterialTopTabNavigator(
                {
                    Home: {
                        screen: Home,
                        navigationOptions: ({ navigation }) => {
                            // console.log(navigation)
                        }
                    },
                    Scene1: {
                        screen: Scene1,
                        navigationOptions: ({ navigation }) => {
                            // console.log(navigation)
                        }
                    },
                }, {
                    defaultNavigationOptions: ({ navigation }) => ({
                        tabBarIcon: ({ focused, horizontal, tintColor }) => {
                            const { routeName } = navigation.state;
                            let iconName;
                            if (routeName === 'Home') {
                                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                            }
                            else if (routeName === 'Scene1') {
                                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                            }
                            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                        }
                    }),
                    tabBarOptions: {
                        activeTintColor: 'white',
                        inactiveTintColor: 'gray',
                    }
                }
            ),
            navigationOptions: ({ navigation }) => {
                let searchNavBar = navigation.state.routes[0].params && navigation.state.routes[0].params.searchNavBar
                return ({
                    header: searchNavBar,
                })
            }
        }
    }, {
        initialRouteName: 'tabNavigation',
    }
)

let StackNavigator = null

Platform.OS == 'ios' ?
    StackNavigator = StackNavigatorIOS :
    StackNavigator = StackNavigatorAndroid

export default StackNavigator