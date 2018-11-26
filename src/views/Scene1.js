import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Scene1 extends Component {

    static navigationOptions({ navigation }) {
        return {
            headerTitle: <Text>Scene 1</Text>,
            headerRight: (
                <Button
                    onPress={() => { alert('test') }}
                    title="+1"
                    color="#fff"
                />
            ),
        };
    };

    componentDidMount(){
        // console.log(this.props.navigation)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Scene 1</Text>
                <Button
                    title="Go to Scene2"
                    onPress={() => this.props.navigation.navigate('Scene2')}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    HomeReducer: state.HomeReducer
});

const mapActionsToProps = null;

export default connect(mapStateToProps, mapActionsToProps)(Scene1);
