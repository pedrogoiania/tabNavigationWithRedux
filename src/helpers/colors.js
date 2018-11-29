import { Platform } from 'react-native'

export default Platform.select({
    ios: {
        primaryDark: '#092F73',
        primary: '#0D3D93',
        secondaryDark: '#2154B0',
        secondary: '#406BBA',
        light: '#6589CC',
    },
    android: {
        primaryDark: '#092F73',
        primary: '#0D3D93',
        secondaryDark: '#2154B0',
        secondary: '#406BBA',
        light: '#6589CC',
    }
})