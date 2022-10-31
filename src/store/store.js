// import { compose, createStore, applyMiddleware } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
};

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// // root-reducer

// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware]
});
