import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation'
import StackNavigator from './StackNavigator'

const AppContainer = createAppContainer(StackNavigator)

class Routes extends Component {
    render(){
        return (
            <AppContainer />
        )
    }
}

export default Routes