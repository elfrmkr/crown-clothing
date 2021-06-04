import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';
/*when actions is fired or dispatch, in order for us to display -console log for us- them we need to use middleware (between action is firing and the root reducer), expected type is an array*/

//if you modify the array later, do it like this
const middlewares = [];

if (process.env.NODE_ENV == 'development') {
    middlewares.push(logger);
}  

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// creating persisted version of the store 
export const persistor = persistStore(store);

export default {store, persistor};
