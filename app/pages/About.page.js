import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class AboutPage extends Component {
    render () {
      return (
            <View>
                <Text>About View </Text>
                <Button 
                    onPress={this.props.onHomePress}
                    title="Home Page"
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    onHomePress: () => {
        dispatch(NavigationActions.navigate({routeName: 'home'}));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);