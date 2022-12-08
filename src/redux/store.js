import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
// import { thunkMiddleware } from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunkMiddleware),
//     );

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
)

    export default store;
