import logo from './logo.svg';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux';
import Counter from './Counter';
function App() {
  return (
    <Provider store={store}>
      <div className="betterview">
        <h1>Welcome to React Applications</h1>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
