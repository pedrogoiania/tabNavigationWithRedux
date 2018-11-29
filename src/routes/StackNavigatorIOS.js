import React from 'react'
import { View, Text, Platform, TextInput } from 'react-native'

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../views/Home'
import Scene1 from '../views/Scene1'
import Scene2 from '../views/Scene2'

import colors from '../helpers/colors'

const StackNavigatorIOS = createStackNavigator(
    {
        Scene2: {
            screen: Scene2,
            mode: 'modal',
            navigationOptions: ({navigation}) => ({
                title: 'Scene 2',
                mode: 'modal',
                transtionConfig: {
                    isModal: true
                }
            })
        },
        tabNavigation: {
            screen: createBottomTabNavigator(
                {
                    Home,
                    Scene1,
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
                        activeTintColor: colors.primary,
                        inactiveTintColor: colors.secondary,
                    }
                }
            ),
            navigationOptions: ({ navigation }) => {
                let searchNavBar = navigation.state.routes[0].params && navigation.state.routes[0].params.searchNavBar
                return ({
                    // header: searchNavBar,
                    headerTitle: searchNavBar,
                    headerStyle: {
                        backgroundColor: colors.primaryDark
                    }
                })
            }
        }
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: colors.primaryDark,
            },
            headerTintColor: '#fff',
            headerBackTitleStyle: {
                color: 'white'
            }
        }),
        initialRouteName: 'tabNavigation',

    }
)

export default StackNavigatorIOS