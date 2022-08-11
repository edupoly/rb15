import React from 'react'
import store from './app/store';

import { Provider } from 'react-redux';
import './App.css';
import Counter from './features/counter/Counter';
import Books from './features/books/Books';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>HI</h1>
        <Counter></Counter>
        <Books></Books>
      </div>
    </Provider>
  );
}

export default App;
