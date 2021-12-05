import React from 'react';
import { Provider } from "react-redux"
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from './store/mainReducer';

const middleware = [logger];

const store: ReturnType<typeof createStore> = createStore(
    combineReducers({
        main: mainReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware))
)

const Main = () => {
    return (
        <Provider store={store}>
            <div>

            </div>
        </Provider>

    );
};

export default Main;