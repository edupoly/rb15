import React from 'react'
import store from './app/store';

import { Provider } from 'react-redux';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>HI</h1>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
