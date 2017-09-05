import React from 'react';
import { StripeProvider } from "react-stripe-elements";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import reducers from '../reducers/index';
import Router from '../screens/index';
import { OnExit } from "../containers";

import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(combineReducers(reducers), {}, enhancer);

sagaMiddleware.run(rootSaga);

export default function Entry() {
    return (
        <StripeProvider apiKey={"pk_test_dSYlbJzOrMdCFhDYMUtVFUXH" /*"pk_live_z9gGQ7VQqfGifVUMA3seCzlH"*/}>
            <Provider store={store}>
                <Router />
            </Provider>
        </StripeProvider>
    );
}
