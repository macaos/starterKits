import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
import Main from './Main';

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
