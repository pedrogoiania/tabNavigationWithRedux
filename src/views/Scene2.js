import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Scene2 extends Component {

    static navigationOptions({ navigation }) {
        return {
            headerTitle: <Text>Scene 2</Text>,
            headerRight: (
                <Button
                    onPress={() => { alert('test') }}
                    title="+1"
                    color="#fff"
                />
            ),
        };
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Scene 2</Text>
            </View>
        );
    }

}

const mapStateToProps = (state) => ({
    HomeReducer: state.HomeReducer
});

const mapActionsToProps = null;

export default connect(mapStateToProps, mapActionsToProps)(Scene2);
