import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
/*when actions is fired or dispatch, in order for us to display -console log for us- them we need to use middleware (between action is firing and the root reducer), expected type is an array*/

//if you modify the array later, do it like this
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
