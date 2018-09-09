import React, {Component} from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

import RouterWithNavState from './routes';
import App from './App.container';

const store = initStore();

class NoteTaker extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithNavState/>
                {/*<App />*/}
            </Provider>
        );
    }
}

export default NoteTaker