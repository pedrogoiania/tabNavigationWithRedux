import { Platform} from 'react-native'

import StackNavigatorIOS from './StackNavigatorIOS'
import StackNavigatorAndroid from './StackNavigatorAndroid'

export default Platform.select({
    ios: StackNavigatorIOS,
    android: StackNavigatorAndroid
})