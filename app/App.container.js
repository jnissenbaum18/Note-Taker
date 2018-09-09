import React, {Component} from 'react';
import Home from './pages/Home.page';
import {connect} from 'react-redux';

class App extends Component {
    render () {
        console.log(this.props.state); // eslint-disable-line
        return (
            <Home />
        );
    }
}

const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);