import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const devToolsExtension = window && window._REDUX_DEVTOOLS_EXTENSION_;

if (typeof devToolsExtension === 'function') {
    enhancerList.push(devToolsExtension());
}

const enhancerList = [];
const middlewareList = [navMiddleware];

const composedEnhancer = compose(applyMiddleware(...middlewareList), ...enhancerList);

const initStore = () => createStore(reducers, {}, composedEnhancer);

module.exports = {
    initStore
};