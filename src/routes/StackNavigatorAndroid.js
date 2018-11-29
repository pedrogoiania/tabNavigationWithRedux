import React from 'react'
import { Platform } from 'react-native'

import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../views/Home'
import Scene1 from '../views/Scene1'
import Scene2 from '../views/Scene2'
import DrawerContent from '../components/DrawerContent';

import colors from '../helpers/colors'

const StackNavigatorAndroid = createDrawerNavigator(
    {
        StackNavigator: createStackNavigator(
            {
                Scene2: {
                    screen: Scene2,
                    navigationOptions: ({ navigation }) => {
                        return ({
                            headerStyle: {
                                backgroundColor: 'blue'
                            }
                        })
                    }
                },
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
                                },
                            }),
                            tabBarOptions: {
                                style: {
                                    backgroundColor: colors.light,
                                },
                                indicatorStyle: {
                                    color: colors.primaryDark
                                },
                                activeTintColor: colors.primary,
                                inactiveTintColor: colors.secondary,
                            },
                        }
                    ),
                    navigationOptions: ({ navigation }) => {
                        let searchNavBar = navigation.state.routes[0].params && navigation.state.routes[0].params.searchNavBar
                        return ({
                            headerTitle: searchNavBar,
                            headerStyle: {
                                backgroundColor: colors.primaryDark
                            }
                        })
                    }
                }
            }, {
                initialRouteName: 'tabNavigation',
            }
        )
    },
    {
        contentComponent: DrawerContent
    }
)

export default StackNavigatorAndroid