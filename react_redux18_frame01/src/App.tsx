import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
import Main from './Main';
import Core from './comm/Core';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

Core.store = store;

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
