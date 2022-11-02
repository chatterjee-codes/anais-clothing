// import { compose, createStore, applyMiddleware } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// // root-reducer

// export const store = createStore(rootReducer, undefined, composedEnhancers);
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
});

export const persistor = persistStore(store);
