import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import bookingsReducer from './bookings';
import sessionReducer from './session';
import toysReducer from './toys'
import imageReducer from './images';
import reviewReducer from './reviews'
import usersReducer from './users'


const rootReducer = combineReducers({
    session: sessionReducer,
    toys: toysReducer,
    bookings: bookingsReducer,
    images: imageReducer,
    reviews: reviewReducer,
    users: usersReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
