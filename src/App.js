import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native'
import ReduxThunk from 'redux-thunk';
import ReduxMulti from 'redux-multi'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './routes/Routes';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxMulti))}>
        <Routes />
      </Provider>

      // <View>
      //   <Text>Teste</Text>
      // </View>
    );
  }
}
