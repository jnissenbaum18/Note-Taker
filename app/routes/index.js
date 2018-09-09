import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import PropTypes from 'prop-types';

//import AuthRoutes from './auth.routes';
import Home from '../pages/Home.page';
import About from '../pages/About.page';

export const Router = StackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    about: {
        screen: About,
        navigationOptions: {
            header: null
        }
    }
    /*auth: {
        screen: AuthRoutes,
        navigationOptions: {
            header: null
        }
    }*/
});

class RouterWithNavState extends Component {
    render() {
        const ReduxAppNavigator = reduxifyNavigator(Router, "root");
        //const addListener = createReduxBoundAddListener('root');
        const {dispatch, nav} = this.props;
        return (
            <ReduxAppNavigator dispatch={dispatch} state={nav} />
            /*<Router 
                navigation={addNavigationHelpers({dispatch, state: nav, addListener})}
            />*/
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        nav: state.nav
    });
};

RouterWithNavState.propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object
};

export default connect(mapStateToProps)(RouterWithNavState)