import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import Home from './views/Home'

const StackNavigatorIOS = createStackNavigator({
    Home
})

const StackNavigatorAndroid = createStackNavigator({
    Home
})

let StackNavigator = null

Platform.OS == 'ios' ? 
    StackNavigator = StackNavigatorIOS : 
    StackNavigator = StackNavigatorAndroid

export default StackNavigator