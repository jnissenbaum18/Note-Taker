import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import {Router} from '../../routes';

const router = Router.router;
const homeNavAction = router.getActionForPathAndParams('home');
const initialNavState = router.getStateForAction(homeNavAction);

const nav = (state = initialNavState, action) => {
    const nextState = router.getStateForAction(action, state);
    return nextState || state;
};

export default combineReducers({
    test,
    content,
    nav
})